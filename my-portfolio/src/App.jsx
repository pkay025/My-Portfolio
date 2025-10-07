import React from 'react';
import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/About Me';
import Services from './Components/Services';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      
    </div>
  )
}

export default App;
