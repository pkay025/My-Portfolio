import React from "react";
import Img from "../images/1.jpg";    

const AboutMe = () => {
  return (
    <section
      id="#aboutMe"
      className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-cyan-50 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-16"
    >
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-cyan-900 mb-10 tracking-wide">
        About <span className="text-cyan-900">Me</span>
      </h2>

      {/* Main Card Container */}
      <div className="bg-white/60 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-12 lg:p-16 max-w-4xl text-center transition-all duration-500 hover:scale-[1.02]">
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <img
            src={Img}
            alt="Profile"
            className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-full border-4 shadow-lg mx-auto"
          />
        </div>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Hello! I'm <span className="font-semibold text-cyan-900">Menz</span>, a
          Junior Software Developer with a passion for creating elegant and
          efficient web solutions. I enjoy crafting user-friendly interfaces,
          optimizing performance, and bringing creative ideas to life through
          clean, maintainable code.
        </p>

        {/* Technical Skills */}
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-cyan-900 mb-4">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "HTML5",
              "CSS3",
              "Git",
              "GitHub",
              "REST APIs",
              "Agile"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-cyan-100 text-cyan-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-cyan-900 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="mt-10">
          <h3 className="text-2xl font-medium text-cyan-900 mb-4">
            Areas of Interest
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
                "Full Stack Development",
                "UI/UX Design",
                "Computer Networking",
                "Hardware and Software Troubleshooting",
                "DevOps",
            ].map((interest) => (
              <span
                key={interest}
                className="bg-blue-100 text-cyan-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition"
              >
                {interest}
                </span>
            ))}

          </div>
        </div>

        {/* Resume Button */}
        <div className="mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-3 rounded-full shadow-md font-medium hover:opacity-90 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
