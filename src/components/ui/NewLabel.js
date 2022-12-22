import React from 'react';
import styled from 'styled-components';

const NewLabel = ({ children, onClick, value }) => {
  return (
    <StLabel value={value} onClick={onClick}>
      {children}
    </StLabel>
  );
};

export default NewLabel;

NewLabel.defaultProps = {
  onClick: () => {},
  value: '',
};
const StLabel = styled.button`
  cursor: pointer;

  width: 142px;
  height: 37px;
  /* line-height: 50px; */

  display: inline-block;

  padding: 5px 10px;
  margin: 30px 5px;

  font-size: 13px;
  font-weight: 400;
  color: #858585;

  border: 1px solid #ddd;
  border-radius: 30px;

  background: #fff;

  opacity: 1;
  outline: none;

  :hover {
    background-color: #222;
    color: #fff;
  }
`;
