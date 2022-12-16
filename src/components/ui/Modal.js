import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ children, modal, scY = window.innerHeight }) => {
  const styles = { modal, scY };
  return (
    <>
      {ReactDOM.createPortal(
        <Fragment>
          <StModal {...modal}>{children}</StModal>
          <StBackDrop {...styles}></StBackDrop>
        </Fragment>,
        document.getElementById("root")
      )}
    </>
  );
};

export default Modal;

const StModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 140;
  transform: translate(-50%, -50%);
  display: ${({ modal }) => {
    return modal ? "flex" : "none";
  }};
  width: 400px;
  height: 300px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 12px;
  box-shadow: 2px 2px 6px black;
`;
const StBackDrop = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  margin: 0;
  padding: 0;
  display: ${({ modal }) => {
    return modal ? "block" : "none";
  }};
  width: 100vw;
  height: ${({ scY }) => `${scY}px`};
  background-color: rgba(141, 141, 141, 0.8);
`;
