import styled from "styled-components";
import IcLeft from "../assets/icon_left.svg?component";
import IcRight from "../assets/icon_right.svg?component";
import { useState, useRef, useEffect } from "react";

const Carousel = () => {
  const images = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1487734092093-e5b02908580e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1615310748170-29d7088865ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a25pdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (currentIdx === -1) {
      console.log("-1입니다.");

      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-2000px)`;
      setCurrentIdx(images.length - 1);
    } else if (currentIdx === images.length) {
      setCurrentIdx(0);

      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(0px)`;
    }
  }, [currentIdx]);

  const onClickLeftButton = () => {
    if (currentIdx === -1) {
      setCurrentIdx(images.length - 1);
    } else {
      console.log((currentIdx + 1) * 500 - 500);
      setCurrentIdx((prev) => prev - 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        currentIdx * 500 - 500
      }px)`;
    }
  };

  const onClickRightButton = () => {
    if (currentIdx === images.length) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        500 * (currentIdx + 1)
      }px)`;
    }
  };

  return (
    <StWrapper>
      <StLeftButton onClick={onClickLeftButton} />
      <StRightButton onClick={onClickRightButton} />
      <StImageWrapper ref={slideRef}>
        {images.map(({ url, id }) => (
          <img src={url} alt={id} key={id} />
        ))}
      </StImageWrapper>
    </StWrapper>
  );
};
const StWrapper = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  height: 400px;
  overflow: hidden;
`;
const StImageWrapper = styled.div`
  display: flex;
  & > img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const StLeftButton = styled(IcLeft)`
  position: absolute;
  top: calc(100% / 2);
  left: 10px;
  z-index: 999;
  &:hover {
    cursor: pointer;
    & > path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
`;
const StRightButton = styled(IcRight)`
  position: absolute;
  top: calc(100% / 2);
  right: 10px;
  z-index: 999;
  &:hover {
    cursor: pointer;
    & > path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
`;
export default Carousel;
