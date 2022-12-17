import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const Header = () => {
  return (
    <StHeader>
      <StHeaderBox>
        <StNav>
          <NavLink to="/item" style={{ textDecoration: "none" }}>
            ITEM
          </NavLink>
        </StNav>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <StTitle>
            <h1 className="tracking-in-contract-bck">RanTem</h1>
          </StTitle>
        </NavLink>
        <StInputBox>
          <StInput></StInput>
          <Button>Enter</Button>
        </StInputBox>
      </StHeaderBox>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(229, 232, 232, 0.9);
  height: 100px;
  z-index: 100;
`;
const StTitle = styled.div`
  font-family: "EF_jejudoldam";
  .tracking-in-contract-bck {
    -webkit-animation: tracking-in-contract-bck 1s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;
    @-webkit-keyframes tracking-in-contract-bck {
      0% {
        letter-spacing: 1em;
        -webkit-transform: translateZ(400px);
        transform: translateZ(400px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
    @keyframes tracking-in-contract-bck {
      0% {
        letter-spacing: 1em;
        -webkit-transform: translateZ(400px);
        transform: translateZ(400px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
  }
`;
const StHeaderBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
const StNav = styled.nav``;

const StInputBox = styled.div``;
const StInput = styled.input``;
