import React, { useState } from "react";
import styled from "styled-components";
import QuestionImgXML from "./QuestionImgXML";


const Element = ({ className, answerHTML, answerCSS, play }) => {
  let [state, setState] = useState({ active: false });
  return (
    <div className={className}>
      <div
        id="flexSwitch"
        className="d-flex p-0 align-items-end form-check form-switch position-absolute"
      >
        <input
          className="form-check-input m-0 me-1"
          type="checkbox"
          id="flexSwitchCheckChecked"
          defaultChecked={state.active}
          onChange={() => setState({ active: !state.active })}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          題目與作答圖形分割畫面
        </label>
      </div>
      <div id="myCSS" dangerouslySetInnerHTML={{ __html: answerHTML }} />
      <style dangerouslySetInnerHTML={{ __html: answerCSS }} />
      < div
        id="opDisplay"
        style={{
          visibility: state.active ? "visible" : "hidden"
        }}
      >
        <div
          id="line"
          className="position-absolute w-100 h-100 border border-1 border-top-0 border-start-0 border-bottom-0"
        ></div>
        <div className="d-flex justify-content-center align-items-center h-100 w-200">
          <QuestionImgXML  play={play}  />
        </div>
      </div>
    </div >
  );
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .w-200 {
    width: 200%;
  }
  #flexSwitch {
    color: #aaa;
    left: 10px;
    bottom: 8px;
    line-height: 1;
    z-index: 12;

    label {
      font-size: 0.75rem;
    }
  }

  #myCSS {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 10;
  }

  #opDisplay {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
    z-index: 11;
    visibility: hidden;
    overflow: hidden;
  }
`;

export default StyledElement;
