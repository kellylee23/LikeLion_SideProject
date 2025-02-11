import React, { useState, useEffect } from "react";
import styled from "styled-components";
import front1 from "../img/front1.png";
import front2 from "../img/front2.png";
import front3 from "../img/front3.png";
import backCard from "../img/backCard.png";
import HoroscopeText from "./HoroscopeText";

const CardDiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;
// 카드 스타일링
const CardWrapper = styled.div`
  width: 200px;
  height: 330px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 10px;
  cursor: pointer;
  position: relative;
  transition: transform 1.5s ease, opacity 0.5s ease;

  /* 뒷면 이미지 */
  background-image: url(${backCard});
  background-size: cover;
  background-position: center;

  /* 카드가 뒤집히면 앞면 이미지가 보이도록  + 카드 왼쪽 이동*/
  ${({ isOpen, frontImage }) =>
    isOpen &&
    `
    background-image: url(${frontImage});
    transform: rotateY(180deg); /* 카드를 180도 회전시켜서 앞면을 보여줌 */
    transform: scale(1.5) translateX(-150px);  /* 커지면서 왼쪽으로 이동 */
  `}

  /* 열린 카드를 제외한 나머지 카드들은 점점 작아지고 사라짐 */
   ${({ isNotOpen }) =>
    isNotOpen &&
    `
     transform: scale(0.3);  /* 점점 작아지도록 설정 */
     opacity: 0;  /* 점점 투명해지도록 설정 */
   `}
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Card = ({ cardId, index, openedCard, handleCardClick, frontImage }) => {
  const isOpen = openedCard === index; // 클릭된 카드가 펼쳐졌는지 확인
  const isNotOpen = openedCard !== null && openedCard !== index; // 열린 카드 제외 나머지 카드들 사라짐짐

  return (
    <CardContainer>
      <CardWrapper
        isOpen={isOpen} // 카드가 열렸을 때 앞면 보이도록
        isNotOpen={isNotOpen} //나머지 카드 사라짐
        frontImage={frontImage} // 랜덤 앞면 이미지
        onClick={() => handleCardClick(index)} // 카드 클릭 시 상태 변경
      ></CardWrapper>
      {/* 카드가 열린 상태면, 운세 텍스트 표시 */}
      {isOpen && <HoroscopeText />}
    </CardContainer>
  );
};

export default Card;
