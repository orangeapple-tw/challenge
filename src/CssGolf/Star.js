
import React from "react";
import styled from "styled-components";

const Element = ({ className, difficulty }) => {
  const numbers = [1, 2, 3, 4, 5];
  difficulty = Number(difficulty);
  const listItems = numbers.map((number) => {
    if(number < difficulty || number === difficulty){
      return <i key={number.toString()} className="bi bi-star-fill"/>
    }else{
      return <i key={number.toString()} className="bi bi-star"/>
    }
  });
  return <div className={className}>
    <h5>題目描述{listItems}</h5>
  </div>;
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
`;

export default StyledElement;
