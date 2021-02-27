import React from 'react';
import { Header, Routes, Footer } from './exports';
import './App.scss';
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
