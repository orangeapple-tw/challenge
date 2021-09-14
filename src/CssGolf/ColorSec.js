import React from "react";
import styled from "styled-components";
import HintSec from "./HintSec";

const Element = ({ className, play }) => {
  return <div className={className}>
      <div className="h-15 d-flex align-items-end">
          <h5 className="c-white-o70 m-0">提示</h5>
      </div>
      <div className="h-85">
          <div className="h-100 pt-2">
              <div className="bg-white border h-100 border-5 rounded">
                  <HintSec play={play} />
              </div>
          </div>
      </div>
  </div>;
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
  font-family: 'Fira Code', monospace;
  .h-15 {
    height: 15%;
    h5 {
      font-size: 1.25rem;
      color: #fff;
    }
  }

  .h-85 {
    height: 85%;
  }
`;



export default StyledElement;
