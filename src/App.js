import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

import StartPage from "./pages/StartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
