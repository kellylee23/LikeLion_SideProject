import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const CardContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

function CardContainer() {
  const [openedCard, setOpenedCard] = useState(null); // 열린 카드의 인덱스

  const cards = [1, 2, 3, 4, 5]; // 카드의 ID

  const handleCardClick = (index) => {
    setOpenedCard(openedCard === index ? null : index); // 카드 클릭 시 상태 변경
  };

  return (
    <CardContainers>
      {cards.map((cardId, index) => (
        <Card
          key={index}
          cardId={cardId}
          index={index}
          openedCard={openedCard}
          handleCardClick={handleCardClick}
        />
      ))}
    </CardContainers>
  );
}

export default CardContainer;
