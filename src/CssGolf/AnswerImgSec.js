import React from "react";
import styled from "styled-components";
import AnswerImgXMLFrame from "./AnswerImgXMLFrame";

const Element = ({ className, answerHTML, answerCSS, answerDefaultCSS, play }) => {
  return (
    <div className={className}>
      <div className="h-5">
        <h5 className="m-0">作答狀況</h5>
      </div>
      <div className="h-95">
        <div className="h-100 pt-2">
          <div className="bg-white border h-100 border border-5 rounded">
            <AnswerImgXMLFrame play={play} answerHTML={answerHTML} answerCSS={answerCSS}  />
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;

  .h-5 {
    height: 5%;

    h5 {
      font-size: 1.25rem;
      color: #fff;
    }
  }

  .h-95 {
    height: 95%;
  }
`;

export default StyledElement;
