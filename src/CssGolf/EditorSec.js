import React,{ useState, useEffect }  from "react";
// import Editor from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";

const Element = ({ className, code, filename, handleEditorChange, answerDefaultCSS, answerDefaultHTML }) => {
    let [language] = useState(filename.split(".")[1]);
    let [defaultCode, setDefaultCode] = useState("");

    useEffect(() => {
        if (answerDefaultHTML === undefined && answerDefaultCSS === undefined) return;
        setDefaultCode(language === "html" ? answerDefaultHTML : answerDefaultCSS);
    }, [answerDefaultHTML, answerDefaultCSS, language, handleEditorChange, setDefaultCode]);
    
    useEffect(() => {
        if (defaultCode === undefined ) return;
        handleEditorChange({ language, code: defaultCode });  
    }, [defaultCode]);

    return (
        <div className={className}>
            <p>{language.toUpperCase()}</p>
            <Editor
                height="90%"
                theme="vs-light"
                path={filename}
                defaultLanguage={language}
                value={defaultCode}
                onChange={(code) => {
                    handleEditorChange({ language, code })
                }}
            />
        </div>
    );
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  border: 5px solid #dee2e6;
  background: #fff;
  overflow: hidden;
  position: relative;
  p {
    font-family: 'Fira Code', monospace;
    monospace;
    height: 10%;
    box-sizing: border-box;
    margin: 0;
    padding: 5px 7px;
    background: #dee3e6;
    color: #222;
    font-size: 1rem;
    font-weight: 500;
    border-bottom: 5px solid #dee2e6;
  }
`;

export default StyledElement;
