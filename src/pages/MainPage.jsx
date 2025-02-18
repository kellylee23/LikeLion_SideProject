import React, { useState } from "react";
import CardContainer from "../components/CardContainer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FF8325;
    margin: 0;
    padding: 0;
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
