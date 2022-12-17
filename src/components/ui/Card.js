import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StCard>
      <StHeart>
        <StIcon>♡</StIcon>
      </StHeart>
      <StImg
        src="https://cdn.pixabay.com/photo/2021/04/25/02/43/milk-shake-6205399_1280.png"
        alt=""
      />
      <StLittleCard>
        <StH1>Shake</StH1>
        <StPrice>$ 5.00</StPrice>
        <StContetn>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet
        </StContetn>
      </StLittleCard>
      <StButton>+ ADD TO CART</StButton>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  position: relative;
  padding: 30px;
  width: 300px;
  height: 350px;
  transform: translateY(2%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(33, 41, 61, 0.3);
  border-radius: 20px;
  box-shadow: 0px 0 31px 0px rgb(0 0 0 / 10%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const StHeart = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;
const StIcon = styled.i`
  color: rgba(255, 255, 255, 0.8);
  font-size: 3rem;
`;
const StImg = styled.img`
  width: 100px;
`;
const StH1 = styled.h1`
  margin: 20px 0 0 0;
  font-size: 3rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #4a0e60;
`;
const StPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #be35ab;
`;
const StContetn = styled.p`
  width: 100%;
  margin: 20px 0;
  font-size: 1.2rem;
  text-align: center;
  color: #4a0e60;
  line-height: 1.3rem;
`;
const StLittleCard = styled.div`
  width: 70%;
`;
const StButton = styled.div`
  border: none;
  padding: 7px 20px;
  width: 50%;
  border-radius: 10px;
  font-size: 1.2rem;
  background-image: linear-gradient(43deg, #be35ab 0%, #4a0e60 100%);
  color: white;
  font-weight: 600;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
`;
