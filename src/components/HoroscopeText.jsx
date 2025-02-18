import React, { useState, useEffect } from "react";
import styled from "styled-components";
import horoscopeCall from "../utils/horoscopeCall";

const HoroscopeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: auto; */
  width: 200px;
  font-size: 13px;
  color: #333;
  text-align: center;
  position: absolute;
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

  // useEffect(() => {
  //   const fetchHoroscope = async () => {
  //     const result = await horoscopeCall();
  //     setHoroscope(result);
  //   };
  //   fetchHoroscope();
  // }, []);

  // return (
  //   <HoroscopeContainer>
  //     <Line>오늘의 운세: {horoscope.fortune}</Line>
  //     <Line>{horoscope.quote}</Line>
  //     <Line>멋사 가입하기 ~</Line>
  //   </HoroscopeContainer>
  // );
  return (
    <HoroscopeContainer>
      <Line>오늘의 운세: </Line>
      <Line>--</Line>
      <Line>멋사 가입하기 ~</Line>
    </HoroscopeContainer>
  );
}

export default HoroscopeText;
