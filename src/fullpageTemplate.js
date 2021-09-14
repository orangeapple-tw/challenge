import React from "react";
import styled from "styled-components";

const Element = ({ className }) => {
  return <div className={className}></div>;
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
`;

export default StyledElement;
