import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import horoscopeCall from "../utils/horoscopeCall";
import useHoroscopeStore from "../store/horoscopeStore";
import useGuidanceStore from "../store/guidanceStore";
import { useNavigate } from "react-router-dom";

// Keyframe for animation
const headerAnimation = keyframes`
  0% {
    height: 100vh;
    font-size: 150px;
  }
  80% {
    height: 100vh;
    font-size: 100px;
  }
  100% {
    height: 60px;
    font-size: 30px;
  }
`;

// Styled components
const HeaderSpace = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  z-index: 2;
  background-color: #495e57;
  box-shadow: 0px 10px 10px #393a3d;
  font-size: 30px;
  animation: ${headerAnimation} 4s;
`;

const Header = () => {
  const [headerText, setHeaderText] = useState("환영합니다.");

  return <HeaderSpace>{headerText}</HeaderSpace>;
};

export default Header;
