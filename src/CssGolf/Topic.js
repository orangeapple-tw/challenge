import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import QuestionTxtSec from "./QuestionTxtSec";
import ColorSec from "./ColorSec";
import QuestionImgSec from "./QuestionImgSec";
import AnswerImgSec from "./AnswerImgSec";
import EditorSec from "./EditorSec";
import cssjs from "jotform-css.js";
import {useParams} from "react-router-dom";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

// https://docs.google.com/spreadsheets/d/1YqXTHC4lYco6Pd0OTG6J0mPgroRW0g2uWJ4_HktI5YI/edit#gid=0
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

const Element = ({ className }) => {
    let { topicId } = useParams();
    let [loading, setLoading] = useState({ status: true });
    const handleLoading = ({ status }) => {
        setLoading({ status: status });
    };

    const [play, setPlay] = useState({});
    
    
    

    const [answerHTML, setAnswerHtml] = useState("");
    const [answerDefaultHTML, setAnswerDefaultHTML] = useState("");
    const [answerCSS, setAnswerCSS] = useState("");
    const [answerDefaultCSS, setAnswerDefaultCSS] = useState("");
    const handleEditorChange = ({ language, code }) => {
        if (language === "html") {
            setAnswerHtml(code)
        } else {
            setAnswerCSS(code)
        }
    };
    const myCSSParsed = useMemo(() => {
        let parser = new cssjs.cssjs();
        let parsed = parser.parseCSS(answerCSS);
        let mapParsed = parsed.map(e => {
            if(e.selector.split(',').length === 0){
                return "#myCSS " + e.selector + " {\n" +
                e.rules.map(f => f.directive + ": " + f.value + ";").join("\n") + "}"
            }else {
                return e.selector.split(',').map( g => "#myCSS " + g ).join(",") + " {\n" +
                e.rules.map(f => f.directive + ": " + f.value + ";").join("\n") + "}"
            }
        });
        return mapParsed.map(e => e + "\n").join("\n");
    }, [answerCSS]);

    
    useEffect(() => {
        if (topicId === undefined) return;
        const gasUrl = "https://script.google.com/macros/s/AKfycbxwgFFR9XwjCwempFDWaMnwmY9T19k0F36aLSMYnSvAUIdeRYCLeL2cN4PKVE-2JIUXAw/exec";
        const uri = `${gasUrl}?playId=${topicId}`;
        fetch(uri)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if(myJson.status === "false"){
                console.log("沒有此頁面")
            }else{
                if(myJson.length === 1){
                    setPlay(myJson[0])
                }else{
                    console.log("列表頁面")
                }
            }
        });
    },[topicId]);

    useEffect(() => {
        if (play.aDefaultHtml === undefined || play.aDefaultCss === undefined) return;
        setAnswerDefaultHTML(play.aDefaultHtml);
        setAnswerDefaultCSS(play.aDefaultCss);
        setLoading({ status: false });
    }, [play, setAnswerDefaultHTML, setAnswerDefaultCSS, setLoading]);

    return (
        <div className={className}>
            <div 
                className="loadingPage"
                style={{
                    visibility: loading.status ? "visible" : "hidden",
                    opacity: loading.status ? 1 : 0,
                    zIndex: loading.status ? 999 : -999
                }}
            >        
                <div 
                    className="sweet-loading" 
                    style={{
                        visibility: loading.status ? "visible" : "hidden",
                        opacity: loading.status ? 1 : 0,
                        zIndex: loading.status ? 999 : -999
                    }}
                >
                    <FadeLoader color="#ffffff" css={override} size={10} />
                </div>
            </div>
            <div className="mainPage">
                <div className="col-8 d-flex flex-column justify-content-center">
                    <div className="h-36 p-1 pb-2">
                        <div className="h-25 pb-2">
                            <div className="h-100 d-flex align-items-end">
                                <img
                                    className="me-3"
                                    src="https://cdn1.koding.school/assets/logo/oa-logo-mini-730fe59f98d967929255f884abf83ff8f3934387d50b67403be1c4cd1eac6561.png"
                                    alt=""
                                    height="100%"
                                />
                                <h1 id="titleName">/ Challenge #{play.gamesID} - {play.gamesName} / #{play.playId} - {play.title}</h1>
                            </div>
                        </div>
                        <div className="h-75 pt-2">
                            <div className="d-flex h-100">
                                <div className="col-9 pe-2">
                                    <QuestionTxtSec 
                                        play={play}
                                    />
                                </div>
                                <div className="col-3 ps-2">
                                    <ColorSec play={play}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-60 p-1 pt-2 d-flex">
                        <div className="col pe-2">
                            <QuestionImgSec play={play}/>
                        </div>
                        <div className="col ps-2">
                            <AnswerImgSec
                                play={play}
                                answerHTML={answerHTML} 
                                answerCSS={myCSSParsed} 
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center ps-2">
                    <div className="h-48 p-2 pt-1 position-relative">
                        <EditorSec
                            handleEditorChange={handleEditorChange}
                            filename="index.html"
                            code={answerHTML}
                            answerDefaultHTML={answerDefaultHTML}
                        />
                    </div>
                    <div className="h-48 p-2 pb-1 position-relative">
                        <EditorSec
                            handleEditorChange={handleEditorChange}
                            filename="style.css"
                            code={answerCSS}
                            answerDefaultCSS={answerDefaultCSS}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const StyledElement = styled(Element)`
  width: 100vw;
  height: 100vh;
  position: relative; 

  .mainPage {
    width: 100%;
    height: 100%;
    background-color: #363732;
    position: absolute; 
    display: flex; 
    z-index: 0;
  }

  .loadingPage{
    width: 100%;
    height: 100%;
    position: absolute; 
    background-color: #363732;
    opacity: 1;
    visibility: visible;
    transition: All 0.2s ease-out;
  }

  .sweet-loading {
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    position: absolute; 
    left: 50%;
    transform: translateX(-50%);
    background-color: #222;
    opacity: 1;
    visibility: visible;
    transition: All 0.2s ease-out;
  }  

  #titleName {
    font-size: 1.2rem;
    font-family: 'Fira Code',monospace;
    line-height: 1;
    color: #fff;
    margin: 0;
    padding-bottom: 10px;
  }
  .h-36 {
    height: 36%;
  }
  .h-48 {
    height: 48%;
  }
  .h-60 {
    height: 60%;
  }
`;

export default StyledElement;
