import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const UpdataModal = ({ children, modal, closeModal }) => {
  const styles = { modal };
  return (
    <>
      {ReactDOM.createPortal(
        <Fragment>
          <StModal {...styles}>
            <StModalButton onClick={closeModal}>X</StModalButton>
            {children}
          </StModal>

          <StBackDrop {...styles} onClick={closeModal}></StBackDrop>
        </Fragment>,
        document.getElementById('root')
      )}
    </>
  );
};

export default UpdataModal;

const StModal = styled.div`
  display: ${({ modal }) => {
    return modal ? 'flex' : 'none';
  }};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 140;
  /* transform: translate(-50%, -50%); */

  width: 400px;
  height: 350px;
  background-color: white;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-content: center; */
  /* border-radius: 12px; */
  /* box-shadow: 2px 2px 6px black; */
`;
const StBackDrop = styled.div`
  position: fixed;
  top: 0;
  z-index: 120;
  margin: 0;
  padding: 0;
  display: ${({ modal }) => {
    return modal ? 'block' : 'none';
  }};
  width: 100vw;
  height: 100%;
  /* height: 100vh; */

  background-color: rgb(56 56 56 / 80%);
`;

const StModalButton = styled.button`
  width: 35px;
  height: 30px;
  transform: translateX(13vw);
`;
