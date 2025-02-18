import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HoroscopeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100; /* 다른 요소에 가리지 않도록 설정 */
  font-size: 13px;
  color: #333;
  text-align: center;
  width: 200px; /* 고정 크기 설정 */
`;

const LineBox = styled.div`
  background-color: white;
  width: 100%;
  min-width: 200px;
  min-height: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Line = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function HoroscopeText() {
  const [horoscope, setHoroscope] = useState({
    fortune: "로딩 중...",
    quote: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <HoroscopeContainer>
      <LineBox isVisible={isVisible}>
        <Line>오늘의 운세: </Line>
        <Line>--</Line>
        <Line>멋사 가입하기 ~</Line>
      </LineBox>
    </HoroscopeContainer>
  );
}

export default HoroscopeText;
