import React, { useEffect } from "react";

import Footer from "./containers/Footer";
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

// import horoscopeCall from "utils/horoscope";
// import DetailPage from "./pages/DetailPage";
import StartPage from "./pages/StartPage";
// import DetailComponent from "components/DetailInfo/DetailComponent";
// import useHoroscopeStore from "store/horoscopeStore";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
