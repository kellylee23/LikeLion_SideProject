import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as THREE from "three"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import backgroundImage from '../img/12.jpg'; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const StartButton = styled.button`
  width: 150px;
  height: 60px;
  margin-top: 20px; 
  background-color: #fcd6c6; 
  color: #000000; 
  border: none; 
  border-radius: 10px; 
  font-size: 22px; 
  font-family: 'Paperlogy-8ExtraBold', sans-serif; 
  cursor: pointer; 
  transition: all 0.3s ease; 

  &:hover {
    background-color: #ffea00; 
    transform: scale(1.05); 
  }
`;

const Title = styled.div`
  font-size: 30px;
  color: #ffffff; 
  font-family: 'Paperlogy-8ExtraBold', sans-serif; 
  font-weight: bold;
  text-align: center; 
  line-height: 1.3;
  margin-bottom: 20px; /* 간격 조정 */

  span:first-child {
    color: white; /* 첫 번째 줄(흰색) */
    display: block; /* 첫 번째 줄을 새로 한 줄로 */
    font-size: 20px; /* 첫 번째 줄 크기 */
    margin-bottom: 10px;
  }

  span:last-child {
    color: black; /* 두 번째 줄(검정색) */
    font-size: 30px; /* 두 번째 줄 크기 */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  height: 100vh; 
  justify-content: center; 
  background: url(${backgroundImage}) no-repeat center center;
  background-size: contain;  
  background-position: center center;
`;

const CanvasContainer = styled.div`
  background: transparent; 
  border-radius: 15px; 
  box-shadow: none; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const Canvas = styled.canvas`
  background: transparent; 
`;

function StartPage() {
  const [title, setTitle] = useState("환영합니다!"); 
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/main"); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle("사자와 함께 알아보는\n오늘의 운세");
    }, 1800);
  
    const scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
  
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 4.2); // 카메라 위치 조정
  
    const canvasElement = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas: canvasElement, alpha: true });
  
    const setSize = () => {
      const width = window.innerWidth < 600 ? window.innerWidth - 40 : 400;
      const height = window.innerWidth < 600 ? window.innerWidth - 40 : 400;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
  
    setSize();
    window.addEventListener('resize', setSize);
  
    let model;
    const loader = new GLTFLoader();
    loader.load(
      "/clover/scene1.gltf",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.005, 0.005, 0.005); // 모델 크기 조정
        model.position.set(0, 9, 0); // 모델 시작 위치 조정
        model.rotation.y = Math.PI; // 모델 회전, 여기서 모델을 180도 회전시킴
        
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  
    const animate = () => {
      requestAnimationFrame(animate);
  
      // 모델을 위로 올리고, 다시 내려오는 애니메이션
      if (model) {
        const time = Date.now() * 0.001;
        const oscillation = Math.sin(time * 2) * 0.4;
        model.position.y = oscillation + 0 ; // y값을 위아래로 움직이게 하기, 시작값을 -1로 맞춰서 살짝 아래로
      }
  
      renderer.render(scene, camera);
    };
    animate();
  
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setSize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
    <GlobalStyle />
    <Container>
      <Title>
        <span>사자와 함께 알아보는</span>
        <span>오늘의 운세</span>
      </Title> 
      <CanvasContainer>
        <Canvas id="canvas" width="400" height="400"></Canvas>
      </CanvasContainer>
      <StartButton onClick={handleClick}>시작하기</StartButton>
    </Container>
    </>
  );
}

export default StartPage;
