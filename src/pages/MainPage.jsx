import React, { useState } from "react";
import CardContainer from "../components/CardContainer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import backgroundImage from "../img/12.jpg"; // 이미지 경로 확인

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #FE5824, #ffb13c);
    //background: url(${backgroundImage}) no-repeat center center;
    background-size: contain;  // contain을 사용하여 비율 유지
    background-position: center center;
    background-attachment: fixed;  // 배경이 고정되도록 설정
  }
`;

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <CardContainer />
    </>
  );
}

export default MainPage;
