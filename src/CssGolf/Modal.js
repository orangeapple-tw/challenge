import React from "react";
import styled from "styled-components";

const Element = ({ className, point, loading, handleLoading }) => {
  return <div className={className}>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">相似度比對結果</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p id="diffTxt">{point}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">重新挑戰</button>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
`;

export default StyledElement;
