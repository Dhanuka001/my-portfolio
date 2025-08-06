'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Admin dashboard for managing e-commerce operations with real-time analytics.',
    image: '/projects/ecommerce.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', '+2'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative tool with real-time team sync and task tracking.',
    image: '/projects/task.jpg',
    tags: ['React', 'Node.js', 'Socket.io', '+2'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'Weather app with detailed forecasts and interactive maps.',
    image: '/projects/weather.png',
    tags: ['React Native', 'Redux', 'OpenWeatherMap API', '+1'],
    demo: '#',
    code: '#',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    custom={index}
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    className="relative group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow hover:shadow-xl transition duration-300"
  >
    <div className="relative w-full h-52 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 text-sm px-3 py-1 rounded shadow hover:scale-105 transition flex items-center gap-1"
        >
          <ExternalLink className="w-4 h-4" /> Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 text-sm px-3 py-1 rounded shadow hover:scale-105 transition flex items-center gap-1"
        >
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{project.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-36 px-10 sm:px-10 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-purple-600"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A showcase of my recent work, demonstrating skills in modern web development, user experience design, and problem-solving.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
