import React from "react";
import styled from "styled-components";

import HoroscopeText from "./HoroscopeText";

// 카드 스타일링
const CardWrapper = styled.div`
  width: 100px;
  height: 150px;
  background-color: #4caf50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 1.5s ease, opacity 0.5s ease;

  /* 열린 카드만 커지면서 왼쪽으로 이동 */
  ${({ isOpen }) =>
    isOpen &&
    `
    transform: scale(1.5) translateX(-150px);  /* 커지면서 왼쪽으로 이동 */
  `}

  /* 열린 카드가 뒤집히는 애니메이션 */
  ${({ isOpen }) =>
    isOpen &&
    `
    transform: scale(1.5) translateX(-150px) rotateY(180deg);  /* 커지면서 왼쪽으로 이동하고 뒤집힘 */
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

function Card({ cardId, index, openedCard, handleCardClick }) {
  const isOpen = openedCard === index; // 클릭된 카드가 펼쳐졌는지 확인
  const isNotOpen = openedCard !== null && openedCard !== index; // 열린 카드 제외 나머지 카드들

  return (
    <CardContainer>
      <CardWrapper
        isOpen={isOpen}
        isNotOpen={isNotOpen} // 열린 카드 제외 나머지 카드들에 스타일 적용
        onClick={() => handleCardClick(index)} // 카드 클릭 시 상태 변경
      >
        <p>카드 {cardId}</p>
      </CardWrapper>

      {/* 카드가 열린 상태면, 운세 텍스트 표시 */}
      {isOpen && <HoroscopeText />}
    </CardContainer>
  );
}

export default Card;
