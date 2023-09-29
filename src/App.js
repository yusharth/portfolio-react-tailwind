import './App.css';
import * as React from 'react';
import Home from './pages/Home';
// import Hero from './components/Hero';
// import Footer from './components/Footer'
import { useState } from 'react';
// import Switcher from './components/Switcher';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div>
      <Home />
      {/* <Hero/>
      <Footer/> */}
    </div>
  )
};

export default App;