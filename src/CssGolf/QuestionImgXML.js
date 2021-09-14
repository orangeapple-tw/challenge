import React from "react";
import styled from "styled-components";

const Element = ({ className, play }) => {
    return (
      <div className={className}>
        { play !== undefined && 
          <div id="questionBundle">
            <div dangerouslySetInnerHTML={{ __html: play.qHtml }} />
            <style dangerouslySetInnerHTML={{ __html: play.qCss }} />
          </div>
        }
      </div>
    );
};

const StyledElement = styled(Element)`

  width: 100%;
  height: 100%;
  #questionBundle, #questionBundle > div:first-Child {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

export default StyledElement;
