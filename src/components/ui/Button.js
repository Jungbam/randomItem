import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, width, height, hover, shadow }) => {
  const styles = {
    hover,
    shadow,
    width,
    height,
    children,
  };
  return (
    <StBtn {...styles} onClick={onClick}>
      {children}
    </StBtn>
  );
};

Button.defaultProps = {
  bgColor: "transparent",
  onclick: () => {},
  shadow: "none",
  border: "1px solid black",
  width: "80px",
};

const StBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: black;
  border-radius: 6px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadow }) => shadow};
  border: 1px solid black;
  cursor: pointer;
  padding: 3px 5px;
  &:hover {
    outline: none;
    background-color: black;
    color: white;
    opacity: 0.8;
    transform: scale(0.9);
  }
`;

export default Button;
