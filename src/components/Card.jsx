import React from "react";
import styled from "styled-components";
import front1 from "../img/front1.png";
import front2 from "../img/front2.png";
import front3 from "../img/front3.png";
import backCard from "../img/backCard.png";
import HoroscopeText from "./HoroscopeText";

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; */
`;

const CardWrapper = styled.div`
  width: 72px;
  height: 120px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute; /* 카드 위치를 자유롭게 조정 */
  transition: transform 1.5s ease, opacity 0.5s ease;

  /* 뒷면 이미지 */
  background-image: url(${backCard});
  background-size: cover;
  background-position: center;

  /* 카드가 열렸을 때의 동작 */
  ${({ isOpen, frontImage, index }) =>
    isOpen &&
    `
    background-image: url(${frontImage});
    transform: rotateY(180deg) scale(1.5) translate(${getCardOpenTransform(
      index
    )});
    z-index: 10; /* 열린 카드는 위로 */
  `}

  /* 열린 카드를 제외한 나머지 카드들은 점점 작아지고 사라짐 */
   ${({ isNotOpen }) =>
    isNotOpen &&
    `
     transform: scale(0.3);
     opacity: 0;
   `}
`;

/* 카드가 열렸을 때의 위치 계산 함수 */
const getCardOpenTransform = (index) => {
  switch (index) {
    case 0:
      return "-100px, -20px"; // 첫 번째 카드는 왼쪽 위로 이동
    case 1:
      return "-50px, -20px"; // 두 번째 카드는 왼쪽으로 이동
    case 2:
      return "0, -20px"; // 세 번째 카드는 중앙에서 약간 위로 이동
    case 3:
      return "50px, -20px"; // 네 번째 카드는 오른쪽으로 이동
    case 4:
      return "100px, -20px"; // 다섯 번째 카드는 오른쪽 위로 이동
    default:
      return "0, 0";
  }
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const HoroContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   margin-top: 50px;
// `;

const HoroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
  position: absolute; /* 위치를 자유롭게 조정 */
  transition: transform 1.5s ease; /* 부드러운 이동 효과 */

  ${({ index }) => `
    transform: translate(${getHoroPosition(index)});
  `}
`;

/* 운세 텍스트의 위치 계산 함수 */
const getHoroPosition = (index) => {
  switch (index) {
    case 0:
      return "150px, 100px"; // 첫 번째 카드의 운세 텍스트 위치
    case 1:
      return "70px, 100px"; // 두 번째 카드의 운세 텍스트 위치
    case 2:
      return "0, 100px"; // 세 번째 카드의 운세 텍스트 위치
    case 3:
      return "-70px, 100px"; // 네 번째 카드의 운세 텍스트 위치
    case 4:
      return "-150px, 100px"; // 다섯 번째 카드의 운세 텍스트 위치
    default:
      return "0, 0";
  }
};

const Card = ({ cardId, index, openedCard, handleCardClick, frontImage }) => {
  const isOpen = openedCard === index; // 현재 열린 카드인지 확인
  const isNotOpen = openedCard !== null && openedCard !== index; // 다른 카드인지 확인

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
