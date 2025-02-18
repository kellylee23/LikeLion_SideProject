import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as THREE from "three"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
// import backgroundImage from '../img/background.jpg'; 

const StartButton = styled.button`
  width: 150px;
  height: 60px;
  margin-top: 20px; 
  background-color: #0055ff; 
  color: white; 
  border: none; 
  border-radius: 10px; 
  font-size: 22px; 
  font-family: "Bagel Fat One", serif;
  cursor: pointer; 
  transition: all 0.3s ease; 

  &:hover {
    background-color: #050046; 
    transform: scale(1.05); 
  }
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  color: #000000; 
  font-family: "Bagel Fat One", serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-size: cover; 
  height: 100vh; 
  justify-content: center; 
  padding: 20px; 
`;

const CanvasContainer = styled.div`
  background: transparent; 
  padding: 20px; 
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
      setTitle("사자와 함께 알아보는 오늘의 운세");
    }, 1800); 

    const scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 8); 

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
      "/shiba/scene.glb", 
      (gltf) => {
        model = gltf.scene;
        model.scale.set(6, 6, 6); 
        model.position.y = 0.5; 
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.05; 
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
    <Container>
      <Title>{title}</Title> 
      <CanvasContainer>
        <Canvas id="canvas" width="400" height="400"></Canvas>
      </CanvasContainer>
      <StartButton onClick={handleClick}>시작하기</StartButton>
    </Container>
  );
}

export default StartPage;

