import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";

import GlobalStyle from "./components/GlobalStyle";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.onbeforeunload = () => {
      sessionStorage.setItem("shouldNavigateToStart", "true");
    };

    // 새로고침 후 StartPage로 이동
    if (sessionStorage.getItem("shouldNavigateToStart") === "true") {
      navigate("/");
      sessionStorage.removeItem("shouldNavigateToStart");
    }
  }, [navigate]);

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
