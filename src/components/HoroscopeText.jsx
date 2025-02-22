import React, { useState, useEffect } from "react";
import styled from "styled-components";
import horoscopeCall from "../utils/horoscopeCall"; 

// 기본 컨테이너 스타일
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

// 배경색과 그림자 등 기본 스타일을 설정한 Box
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
  margin-top: 70px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Title = styled.div`
  font-size: 14px;
  font-family: 'Paperlogy-8ExtraBold', sans-serif;
  color: #000000;
  margin-top: 3px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 9px;
  font-family: "42dot Sans", serif;
  color: #000000;
  margin-bottom: 10px;
  white-space: pre-wrap;
  opacity: 0.6;
`;

const Author = styled.div`
  font-size: 9px;
  font-family: "42dot Sans", serif;
  color: #000000;
  margin-top: -5px;
  opacity: 0.7;
`;

// 클릭 가능한 링크 스타일
const Link = styled.a`
  font-size: 10px;
  font-family: 'Paperlogy-8ExtraBold', sans-serif;
  color: #ff7710;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 5px;
`;

// 버튼 스타일
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
`;

// 홈 버튼 스타일
const HomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fcd6c6;
  font-family: 'Paperlogy-8ExtraBold', sans-serif;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ffea00; 
    transform: scale(1.05); 
  }
`;

const handleHomeClick = () => {
  window.location.href = "/";
};

function HoroscopeText() {
  const [horoscope, setHoroscope] = useState({
    fortune: "로딩 중...",
    quote: "",
    author: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  // useEffect로 API 호출 및 데이터 업데이트
  useEffect(() => {
    const fetchHoroscope = async () => {
      try {
        const apiResponse = await horoscopeCall(); // API 호출
        const parsedResponse = JSON.parse(apiResponse); // 응답을 JSON으로 파싱

        // 응답을 상태에 업데이트
        setHoroscope({
          fortune: parsedResponse.fortune,
          quote: parsedResponse.quote,
          author: parsedResponse.author || "– 알 수 없음", // author가 없을 경우 처리
        });

        setIsVisible(true); // 데이터가 로딩되면 요소 보이기
      } catch (error) {
        console.error("운세 데이터를 가져오는 데 오류가 발생했습니다:", error);
      }
    };

    fetchHoroscope();
  }, []);

  return (
    <HoroscopeContainer id="horoscope-container">
      <LineBox isVisible={isVisible}>
        {/* 오늘의 운세 부분 */}
        <Title>오늘의 운세</Title>
        <Content>{horoscope.fortune}</Content>

        {/* 명언 부분 */}
        <Title>명언</Title>
        <Content>{horoscope.quote}</Content>
        <Author>{horoscope.author}</Author> {/* author 부분 추가 */}

        {/* 클릭 가능한 링크 */}
        <Link href="https://forms.gle/D3j9oTqUfc6uwka68" target="_blank">
          멋대 지원하러가기
        </Link>
      </LineBox>
      <ButtonDiv>
        <HomeButton onClick={handleHomeClick}>홈으로</HomeButton>
      </ButtonDiv>
    </HoroscopeContainer>
  );
}

export default HoroscopeText;
