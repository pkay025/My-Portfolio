import React from 'react';
import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import AboutMe from './Components/About Me';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Contact />
      
    </div>
  )
}

export default App;
