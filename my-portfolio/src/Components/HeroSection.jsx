import React from 'react';
import Img from "../images/developer.svg";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start py-10 px-10">
        <h2 className="text-2xl md:text-3xl xl:text-4xl text-center md:text-left uppercase font-semibold px-11">
          Hi, I am Menz
        </h2>
        <p className="mt-4 text-lg md:text-xl xl:text-2xl text-center md:text-left leading-normal px-11">
          A Junior Software Developer 
        </p>
      </div>
      <div className="w-70 h-70 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[500px] overflow-hidden rounded-[70%]">
        <img src={Img} alt="Developer Illustration" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
      </div>
    </div>
  );
};

export default HeroSection;
