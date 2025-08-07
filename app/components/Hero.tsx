'use client';

import { ArrowDownToLine, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import profileImg from '@/public/profile_image.jpg';
import AnimatedBlur from './AnimatedBlur';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import WhatsAppButton from './WhatsappButton';

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const [finalText, setFinalText] = useState('');
  const [text] = useTypewriter({
    words: ['Frontend Developer'],
    typeSpeed: 90,
    deleteSpeed: 0,
    delaySpeed: 1000,
    loop: 1,
    onLoopDone: () => setFinalText('Frontend Developer'), // Save it once done
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
      ref={ref}
      id="home"
      className="scroll-mt-20 relative flex flex-col items-center justify-center text-center pt-2 px-8 sm:px-10 min-h-screen"
    >
      <AnimatedBlur />

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

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-6">
        Dhanuka Rathnayaka
      </h1>

      <h2 className="text-xl sm:text-2xl mt-2 font-medium text-gray-600 dark:text-gray-300 animate-pulse-text">
        {finalText || text}
        {!finalText && <Cursor />}
      </h2>

      <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400 text-sm sm:text-base">
        Passionate about creating beautiful, functional, and user-centered digital experiences.
        I bring ideas to life through code and design.
      </p>

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

      <div className="mt-6 flex items-center gap-6 text-gray-700 dark:text-gray-300">
        <a href="https://github.com/Dhanuka001"><Github className="w-6 h-6 cursor-pointer hover:text-blue-500" /></a>
        <a href="https://www.linkedin.com/in/dhanuka-rathnayaka1/"><Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-500" /></a>
        <a href="mailto:lohandanuka@gmail.com"><Mail className="w-6 h-6 cursor-pointer hover:text-blue-500" /></a>
      </div>

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

      {inView && <WhatsAppButton />}
    </section>
  );
};

export default Hero;
