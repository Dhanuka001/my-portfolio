'use client';

import { ArrowDownToLine, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import profileImg from '@/public/profile_image.jpg'; 
import AnimatedBlur from './AnimatedBlur';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState } from 'react';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer'],
    typeSpeed: 90,
    deleteSpeed: 0,
    delaySpeed: 1000,
    loop: 1,
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleScrollClick = () => {
    setIsClicked(true);
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => setIsClicked(false), 1000); 
  };

  return (
    <section
      id="home"
      className="scroll-mt-20 relative flex flex-col items-center justify-center text-center pt-2 px-8 sm:px-10 min-h-screen"
    >
      <AnimatedBlur />

      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
          <Image
            src={profileImg}
            alt="Profile"
            width={160}
            height={160}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-6">
        Dhanuka Rathnayaka
      </h1>

      {/* Role */}
      <h2
        className={`text-xl sm:text-2xl mt-2 font-medium text-gray-600 dark:text-gray-300 ${
          text === 'Frontend Developer' ? 'animate-pulse-text' : ''
        }`}
      >
        {text}
        <Cursor />
      </h2>

      {/* Paragraph */}
      <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400 text-sm sm:text-base">
        Passionate about creating beautiful, functional, and user-centered digital experiences.
        I bring ideas to life through code and design.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
      <button
        onClick={() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition"
      >
        View My Work
      </button>

        <button className="border px-6 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Download CV
        </button>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex items-center gap-6 text-gray-700 dark:text-gray-300">
        <Github className="w-6 h-6 cursor-pointer hover:text-blue-500" />
        <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-500" />
        <Mail className="w-6 h-6 cursor-pointer hover:text-blue-500" />
      </div>

      {/* Scroll Arrow */}
      <div className="mt-20 animate-bounce">
        <div
          onClick={handleScrollClick}
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 cursor-pointer"
        >
          <ArrowDownToLine
            className={`w-8 h-8 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-transform duration-700 ${
              isClicked ? 'rotate-[360deg]' : ''
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
