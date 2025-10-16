import React from 'react';
import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import AboutMe from './Components/About Me';

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
