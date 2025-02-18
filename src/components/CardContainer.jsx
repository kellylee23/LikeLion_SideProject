import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";

import front1 from "../img/front1.png";
import front2 from "../img/front2.png";
import front3 from "../img/front3.png";
import backCard from "../img/backCard.png";

const CardContainers = styled.div`
  width: 391px;
  min-height: 100vh;
  margin: 0 auto;
  background: #bbbbbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const CardWrapper = styled.div`
  position: absolute;
  transition: all 0.5s ease-in-out;
  width: auto;
  height: auto;
  transform: ${({ spreadCards, index }) => {
    if (spreadCards) {
      if (index === 0) {
        return "translateX(-150px)";
      } else if (index === 1) {
        return "translateX(-75px)";
      } else if (index === 3) {
        return "translateX(75px)";
      } else if (index === 4) {
        return "translateX(150px)";
      }
    } else {
      return index === 2 ? "translateX(0)" : "translateX(0)";
    }
  }};
  z-index: ${({ spreadCards, index }) => (spreadCards && index === 2 ? 10 : 1)};
`;

function CardContainer() {
  const [openedCard, setOpenedCard] = useState(null);
  const [spreadCards, setSpreadCards] = useState(false);
  const [firstClick, setFirstClick] = useState(true); // 첫 번째 클릭 여부 추가

  const frontImages = [front1, front2, front3];
  const backImages = [backCard];

  const getRandomImage = (paths) => {
    const randomIndex = Math.floor(Math.random() * paths.length);
    return paths[randomIndex];
  };

  const cards = [1, 2, 3, 4, 5];

  const [frontImagePaths, setFrontImagePaths] = useState([]);
  const [backImagePaths, setBackImagePaths] = useState([]);

  useEffect(() => {
    const randomFronts = cards.map(() => getRandomImage(frontImages));
    const randomBacks = cards.map(() => getRandomImage(backImages));

    setFrontImagePaths(randomFronts);
    setBackImagePaths(randomBacks);
  }, []);

  const handleCardClick = (index) => {
    if (firstClick) {
      setSpreadCards(true); // 첫 번째 클릭에서 카드를 펼치기만 함
      setFirstClick(false);
    } else {
      setOpenedCard(index); // 두 번째 클릭에서 선택한 카드만 뒤집힘
    }
  };

  return (
    <CardContainers>
      {cards.map((cardId, index) => (
        <CardWrapper key={index} spreadCards={spreadCards} index={index}>
          <Card
            cardId={cardId}
            index={index}
            openedCard={openedCard}
            handleCardClick={handleCardClick}
            frontImage={frontImagePaths[index]}
            backImage={backImagePaths[index]}
          />
        </CardWrapper>
      ))}
    </CardContainers>
  );
}

export default CardContainer;
