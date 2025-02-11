import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";

import front1 from "../img/front1.png";
import front2 from "../img/front2.png";
import front3 from "../img/front3.png";
import backCard from "../img/backCard.png";

const CardContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
`;

function CardContainer() {
  const [openedCard, setOpenedCard] = useState(null); // 열린 카드의 인덱스

  // 카드 앞면과 뒷면 이미지 URLs
  const frontImages = [front1, front2, front3];
  const backImages = [backCard];

  // 카드 이미지를 랜덤하게 뽑는 함수
  const getRandomImage = (paths) => {
    const randomIndex = Math.floor(Math.random() * paths.length);
    return paths[randomIndex];
  };

  const cards = [1, 2, 3, 4, 5]; // 카드의 ID

  // 랜덤 앞면과 뒷면 이미지 배열을 생성
  const [frontImagePaths, setFrontImagePaths] = useState([]);
  const [backImagePaths, setBackImagePaths] = useState([]);

  // 랜덤 이미지 초기화 함수
  const initializeRandomImages = () => {
    const randomFronts = cards.map(() => getRandomImage(frontImages));
    const randomBacks = cards.map(() => getRandomImage(backImages));

    setFrontImagePaths(randomFronts);
    setBackImagePaths(randomBacks);
  };

  // 초기 랜덤 이미지 설정
  useEffect(() => {
    initializeRandomImages();
  }, []);

  // 카드 클릭 시 상태 변경 및 랜덤 이미지 초기화
  const handleCardClick = (index) => {
    setOpenedCard(openedCard === index ? null : index); // 카드 클릭 시 상태 변경
    if (openedCard !== index) {
      // 카드가 열렸을 때 랜덤 이미지 초기화
      initializeRandomImages();
    }
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
          frontImage={frontImagePaths[index]} // 랜덤 앞면 이미지
          backImage={backImagePaths[index]} // 랜덤 뒷면 이미지
        />
      ))}
    </CardContainers>
  );
}

export default CardContainer;
