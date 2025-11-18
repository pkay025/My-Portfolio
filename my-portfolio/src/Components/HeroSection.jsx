import React from 'react';
import Img from "../images/developer.svg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 rounded-full bg-cyan-200/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-cyan-300/30 blur-3xl animate-pulse" />
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-11">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-cyan-900 mb-6 tracking-wide">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-900 to-cyan-500 bg-clip-text text-transparent">Nunoo Mensah</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Junior software developer crafting fast, accessible, and reliable web apps.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            href="#about"
            className="bg-gradient-to-r from-cyan-900 to-cyan-500 text-white px-8 py-3 rounded-full shadow-md font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-cyan-300 text-center"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 flex justify-center items-center">
        <div className="relative p-[3px] rounded-3xl shadow-2xl max-w-[900px] w-full">
          <div className="bg-white/60 supports-[backdrop-filter]:bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02]">
            <img src={Img} alt="Developer Illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
