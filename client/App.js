import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Routes, Footer, RegisterHeader } from "./exports";
import "./App.scss";
const App = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="App">
      {location.pathname === "/" ? <Header /> : <RegisterHeader />}
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
