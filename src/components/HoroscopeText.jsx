import React from "react";
import styled from "styled-components";

const HoroscopeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 200px;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

const Line = styled.div`
  margin-bottom: 10px;
`;

function HoroscopeText() {
  return (
    <HoroscopeContainer>
      <Line>오늘의 운세: ~~~</Line>
      <Line>~~~~</Line>
      <Line>멋사 가입하기 ~</Line>
    </HoroscopeContainer>
  );
}

export default HoroscopeText;
