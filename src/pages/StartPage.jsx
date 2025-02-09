import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StartButton = styled.button`
  width: 100px;
`;

function StartPage() {
  const navigate = useNavigate(); // navigate 함수 가져오기

  const handleClick = () => {
    navigate("/main"); // 버튼 클릭 시 /main으로 이동
  };

  return (
    <div>
      사자와 함께 알아보는 오늘의 운세
      <StartButton onClick={handleClick}>시작하기</StartButton>
    </div>
  );
}

export default StartPage;
