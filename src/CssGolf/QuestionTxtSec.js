import React, { useState, useEffect } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import resemble from "resemblejs";
import Star from "./Star";
import { Modal, Button, Spinner } from 'react-bootstrap';

const Element = ({ className, play}) => {
    const [show, setShow] = useState(false);
    const [point, setPoint] = useState(0);
    const [resembleLoading, setResembleLoading] = useState({ status: false });

    const handleClose = () => {
      setPoint(0);
      setShow(false)
    };
    const handleShow = () => {
      setResembleLoading({ status: true });
      handleResembleCanvas();
      // setShow(true); handleResembleCanvas 後
    };

    const handleResembleCanvas = async () => {
      const myCSSElem = document.querySelector("#myCSS");
      const beComparedElem = document.querySelector("#beCompared");
      let myCSSDataURL = await html2canvas(myCSSElem, {backgroundColor: null}).then((canvas) => canvas.toDataURL("image/png", 1.0));
      // console.log(`myCSSDataURL:${myCSSDataURL}`);
      // console.log("get myCSSDataURL");
      let beComparedDataURL = await html2canvas(beComparedElem, {backgroundColor: null}).then((canvas) => canvas.toDataURL("image/png", 1.0));
      // console.log(`beComparedDataURL:${beComparedDataURL}`);
      // console.log("get beComparedDataURL");
      resemble.outputSettings({ useCrossOrigin: false });
      resemble(myCSSDataURL).compareTo(beComparedDataURL).onComplete((data) => {
        const roundDecimal = (val, precision) => Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
        let tem = 100 - data.misMatchPercentage;
        let temp = isNaN(tem) ? 0 : roundDecimal(tem, 2);
        // console.log("相似度為: " + temp);
        setResembleLoading({ status: false });
        setPoint(temp);
        setShow(true);
      });
      return `done`;
    }

    return (
        <div className={className}>
            <div className="h-15 d-flex align-items-end justify-content-between">
                <Star difficulty={play.difficulty} />
            </div>
            <div className="h-85">
                <div className="h-100 pt-2 position-relative">
                    <div
                        id="questText"
                        className="bg-white border h-100 border-5 rounded position-relative p-2 overflow-auto"
                    >
                        <p className="m-0">{play.qTxt}</p>
                    </div>
                    <Button 
                      id="diff"
                      className="btn btn-danger"
                      onClick={handleShow} 
                      variant="primary" 
                      disabled={false} >
                        {resembleLoading.status && <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          /> 
                        }
                      <span className="visually-visible">送出答案</span>
                    </Button>

                    <Modal 
                      show={show} 
                      onExit={()=>{
                        setPoint(0);
                        setResembleLoading({ status: false });
                      }}
                      onHide={handleClose}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title
                          id="contained-modal-title-vcenter"
                         >Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{point}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
  #diff {
    bottom: 10px;
    right: 10px;
    position: absolute;
  }

  .h-15 {
    height: 15%;
    h5 {
      font-size: 1.25rem;
      color: #fff;
      margin: 0;
      i {
        margin-left: 5px;
        font-size: 0.5rem;
        color: yellow;
      }
      i:first-child {
        margin-left: 10px;
      }
    }
  }
  .h-85 {
    height: 85%;

    #questText {
      overflow-y: scroll;
    }

    #questText::-webkit-scrollbar {
      display: none;
    }

    #questText {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    
  }
`;

export default StyledElement;
