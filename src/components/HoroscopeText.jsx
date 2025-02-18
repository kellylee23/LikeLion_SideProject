import React, { useState, useEffect } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const HoroscopeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  font-size: 13px;
  color: #333;
  text-align: center;
  width: 200px;
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

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
`;

const HomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const handleHomeClick = () => {
  window.location.href = "/";
};

// const handleShareClick = () => {
//   html2canvas(document.body).then((canvas) => {
//     const dataURL = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.href = dataURL;
//     link.download = "entire_screenshot.png";
//     link.click();
//   });
// };

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
    <HoroscopeContainer id="horoscope-container">
      <LineBox isVisible={isVisible}>
        <Line>오늘의 운세: </Line>
        <Line>--</Line>
        <Line>멋사 가입하기 ~</Line>
      </LineBox>
      <ButtonDiv>
        <HomeButton onClick={handleHomeClick}>홈으로</HomeButton>
        <HomeButton>저장하기</HomeButton>
      </ButtonDiv>
    </HoroscopeContainer>
  );
}

export default HoroscopeText;
