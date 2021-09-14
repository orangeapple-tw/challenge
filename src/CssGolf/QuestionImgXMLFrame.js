import React from "react";
import styled from "styled-components";
import QuestionImgXML from "./QuestionImgXML";


const Element = ({ className, play}) => {
    return (
        <div id="beCompared" className={className}>
            <QuestionImgXML play={play} />
        </div>
    );
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
`;

export default StyledElement;
