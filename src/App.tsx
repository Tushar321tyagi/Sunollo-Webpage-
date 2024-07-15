import React from 'react';
import './App.css';
import Navbar from './pages/navbar/index';
import BackgroundContainer from './pages/background';
import MidContent from './pages/mid/index';
import MovingBanner from './pages/banner/index';

function App() {
  return (
  <>
  <Navbar/>
  <BackgroundContainer/>
   <MidContent/>
   <MovingBanner/>
  </>
  );
}

export default App;
