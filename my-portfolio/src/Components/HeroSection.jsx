import React from 'react';
import Img from "../images/developer.svg";

const HeroSection = () => {
  return (
    <section
      id="#hero"
      className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-cyan-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-16"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-11">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-cyan-900 mb-6 tracking-wide">
          Hi, I'm <span className="text-cyan-900">Menz</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          A Junior Software Developer with a passion for creating elegant and efficient web solutions.
        </p>
        <a
          href="#aboutMe"
          className="bg-gradient-to-r from-cyan-900 to-cyan-500 text-white px-8 py-3 rounded-full shadow-md font-medium hover:opacity-90 transition"
        >
          Learn More
        </a>
      </div>
      <div className="w-full md:w-2/3 flex justify-center items-center">
        <div className="bg-white/60 backdrop-blur-md shadow-2xl rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
          <img src={Img} alt="Developer Illustration" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
