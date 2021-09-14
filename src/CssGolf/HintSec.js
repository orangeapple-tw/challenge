import React from "react";
import styled from "styled-components";

const Element = ({ className, play }) => {
  const {hint} = play;
  return <div className={className}>
    { hint !== undefined && 
      JSON.parse(hint).map((value, index) => {
        let [color, txt] = value;
        return <p key={index} style={{background: color }} >{txt}</p>
      })
    }
  </div>;
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
  overflow: scroll;
  p {
    cursor: auto;
    box-shadow:inset 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: .5rem;
    width: 200%;
    margin: 0;
    padding: .5rem;
    border-top: 1px #dee2e6 solid;
    border-bottom: 1px #dee2e6 solid;
  }
  p:first-child {
    border-top: 2px #dee2e6 solid;
  }
  p:last-child {
    border-bottom: 2px #dee2e6 solid;
  }
`;

export default StyledElement;
