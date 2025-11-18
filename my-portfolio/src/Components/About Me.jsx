import React from "react";
import Img from "../images/1.jpg";
import { ArrowRight, Instagram, Youtube, Github } from "lucide-react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-5 md:px-12 lg:px-20 py-12 md:py-16 overflow-hidden"
    >
      <div className="hidden sm:block pointer-events-none absolute -z-10 right-10 -top-10 size-72 rounded-full border border-cyan-200/60" />
      <div className="hidden sm:block pointer-events-none absolute -z-10 right-24 -top-24 size-72 rounded-full border border-cyan-100/60" />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-4">
          <span className="inline-block text-[11px] md:text-xs uppercase tracking-wider font-medium bg-gradient-to-r from-cyan-900 to-cyan-500 text-white rounded-full px-3 py-1 mb-2 md:mb-3 shadow-sm">About Me</span>
          <h1 className="text-3xl md:text-6xl font-medium leading-tight text-gray-700">
            Junior Software <br />
            Developer <br />
          </h1>
          <div className="mt-3 h-[3px] w-20 md:w-28 bg-gradient-to-r from-cyan-900 to-cyan-400 rounded-full" />
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-700 font-medium border-b border-gray-300 pb-2 hover:text-cyan-900 hover:border-cyan-900 transition"
            >
              Book A Call <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-8 md:mt-10">
            <p className="text-gray-700 font-medium mb-3 md:mb-4">Follow Me On :</p>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="https://instagram.com/menzzz33" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center text-gray-700 hover:text-cyan-900 hover:border-cyan-900 transition" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://youtube.com/@EmmanuelNunooMensah" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center text-gray-700 hover:text-cyan-900 hover:border-cyan-900 transition" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="https://github.com/pkay025" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center text-gray-700 hover:text-cyan-900 hover:border-cyan-900 transition" aria-label="GitHub"><Github size={18} /></a>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-4 order-first lg:order-none">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-b from-cyan-200/40 to-transparent blur-2xl" />
            <img
              src={Img}
              alt="Profile portrait"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-[3/4] object-cover object-top rounded-xl shadow-2xl"
            />
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <p className="text-gray-700 font-medium leading-relaxed">
            I'm Menz, a junior software developer focused on building fast, accessible, and maintainable web apps. I enjoy turning ideas into clean UI and dependable backend APIs, with a strong eye for detail and user experience.
          </p>

          <div className="mt-6">
            <p className="text-sm uppercase tracking-wider text-gray-700 font-medium mb-3">Skills & Tools</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white shadow-sm text-cyan-900 text-sm border border-cyan-100">JavaScript</span>
              <span className="px-3 py-1 rounded-full bg-white shadow-sm text-cyan-900 text-sm border border-cyan-100">React</span>
              <span className="px-3 py-1 rounded-full bg-white shadow-sm text-cyan-900 text-sm border border-cyan-100">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-white shadow-sm text-cyan-900 text-sm border border-cyan-100">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full bg-white shadow-sm text-cyan-900 text-sm border border-cyan-100">Git</span>
              <span className="px-3 py-1 rounded-full bg-white shadow-sm text-cyan-900 text-sm border border-cyan-100">REST APIs</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
            <div className="rounded-xl border border-cyan-100 bg-white/60 p-3 md:p-4 text-center shadow-sm">
              <div className="text-2xl font-medium text-cyan-900">10+</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Projects</div>
            </div>
            <div className="rounded-xl border border-cyan-100 bg-white/60 p-3 md:p-4 text-center shadow-sm">
              <div className="text-2xl font-medium text-cyan-900">1</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Clients</div>
            </div>
            <div className="rounded-xl border border-cyan-100 bg-white/60 p-3 md:p-4 text-center shadow-sm">
              <div className="text-2xl font-medium text-cyan-900">1+ yr</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Experience</div>
            </div>
          </div>
          <blockquote className="mt-6 text-gray-700 italic">
            “I will help you make a design with creativity”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
