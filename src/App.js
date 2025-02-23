import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";

import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Redirect from="*" to="/" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
