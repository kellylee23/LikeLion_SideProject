import React from "react";
import styled from "styled-components";
import front1 from "../img/front1.png";
import front2 from "../img/front2.png";
import front3 from "../img/front3.png";
import backCard from "../img/backCard.png";
import HoroscopeText from "./HoroscopeText";

const Container = styled.div``;

const CardWrapper = styled.div`
  width: 72px;
  height: 120px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;

  transition: transform 1.5s ease, opacity 0.5s ease;

  background-image: url(${backCard});
  background-size: cover;
  background-position: center;

  ${({ isOpen, frontImage, index }) =>
    isOpen &&
    `
    background-image: url(${frontImage});
    transform: rotateY(180deg) scale(1.5) translate(${getCardOpenTransform(
      index
    )});
    z-index: 10;
  `}

  ${({ isNotOpen }) =>
    isNotOpen &&
    `
     transform: scale(0.3);
     opacity: 0;
   `}
`;

const getCardOpenTransform = (index) => {
  switch (index) {
    case 0:
      return "-100px, -30px";
    case 1:
      return "-50px, -30px";
    case 2:
      return "0, -30px";
    case 3:
      return "50px, -30px";
    case 4:
      return "100px, -30px";
    default:
      return "0, 0";
  }
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 50px;
  position: absolute;
  transition: transform 1.5s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: ${({ index }) => {
    switch (index) {
      case 0:
        return "150px"; // 인덱스 0일 때
      case 1:
        return "75px"; // 인덱스 1일 때
      case 2:
        return "0px"; // 인덱스 2일 때
      case 3:
        return "-75px"; // 인덱스 3일 때
      case 4:
        return "-150px"; // 인덱스 4일 때
      default:
        return "0px";
    }
  }};
`;

const Card = ({ cardId, index, openedCard, handleCardClick, frontImage }) => {
  const isOpen = openedCard === index;
  const isNotOpen = openedCard !== null && openedCard !== index;

  return (
    <Container>
      <CardContainer>
        <CardWrapper
          isOpen={isOpen}
          isNotOpen={isNotOpen}
          frontImage={frontImage}
          index={index}
          onClick={() => handleCardClick(index)}
        />
      </CardContainer>
      <HoroContainer index={index}>{isOpen && <HoroscopeText />}</HoroContainer>
    </Container>
  );
};

export default Card;
