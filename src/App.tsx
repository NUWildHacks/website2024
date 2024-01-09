import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar/>
      <FAQ />
      <Sponsors />
    </>
  );
}

export default App;
