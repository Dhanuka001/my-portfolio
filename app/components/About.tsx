'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CalendarDays } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-36 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-purple-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I&apos;m a passionate frontend developer who recently completed a hands-on internship
        building real-world applications. I enjoy crafting intuitive UIs using modern tech stacks,
        and I&apos;m currently completing my degree in IT at SLIIT. I love turning ideas into fast,
        accessible, and responsive experiences.
      </motion.p>

      {/* Experience and Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full"
        >
          <div className="bg-white dark:bg-gray-900 h-full flex flex-col justify-between rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-600" />
              Experience
            </h3>
            <div>
              <h4 className="text-lg font-semibold">Intern Software Engineer</h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>Microweb Global Pvt Ltd</span>
                <span className="mx-2">•</span>
                <span>
                  <CalendarDays className="inline w-4 h-4 mr-1" />
                  Sep 2024 – Mar 2025
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Worked as frontend dev on a real estate classified web application</li>
                <li>Gained hands-on experience in Next.js, React, Tailwind, Node.js, SQL</li>
                <li>Designed UIs using Figma & contributed to end-to-end delivery</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-7 text-xs">
                {['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'SQL', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full"
        >
          <div className="bg-white dark:bg-gray-900 h-full flex flex-col justify-between rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-purple-600" />
              Education
            </h3>
            <div>
              <h4 className="text-lg font-semibold">BSc (Hons) in Information Technology</h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>SLIIT – Sri Lanka Institute of Information Technology</span>
                <span className="mx-2">•</span>
                <span>
                  <CalendarDays className="inline w-4 h-4 mr-1" />
                  Expected 2026
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Pursuing a comprehensive curriculum that covers core areas of software development,
                database management, cloud computing, and modern web technologies. This degree program
                emphasizes both theoretical knowledge and hands-on experience, enabling me to design
                and build scalable applications. I&apos;ve also been involved in project-based learning,
                collaborative assignments, and ongoing research to stay up to date with industry standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
