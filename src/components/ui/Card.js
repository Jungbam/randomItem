import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  return <StCard>{children}</StCard>;
};

export default Card;

const StCard = styled.div``;
