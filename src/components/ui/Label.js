import React from "react";
import styled from "styled-components";

const Label = ({ children }) => {
  return <StLabel>{children}</StLabel>;
};

export default Label;

const StLabel = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  font-family: "EF_jejudoldam";
  color: black;
  font-size: 1.2rem;
  border-radius: 12px;
  box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 0.5),
    0px 0px 10px rgba(0, 0, 0, 0.15);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 0) 5%,
    rgba(33, 33, 33, 0.5) 6%,
    rgba(44, 44, 44, 0) 9%,
    rgba(66, 66, 66, 0.5) 10%,
    rgba(120, 120, 120, 0) 17%,
    rgba(180, 180, 180, 0.5) 19%,
    rgba(255, 255, 255, 0) 21%
  );
  background-size: 150%;
  background-position: right;
  transition: 1s;
  &:hover {
    background-position: left;
    color: grey;
    box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1),
      0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

// .noselect {
//   -webkit-touch-callout: none;
//            user-select: none;
// 		-webkit-tap-highlight-color: transparent;
// }

// button {

// }

// button:hover {

// }

// button:focus {
// 	outline: none;
// }
