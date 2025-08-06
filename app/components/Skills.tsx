'use client';

import { motion } from 'framer-motion';
import { Code, Server, Settings, Paintbrush } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="text-blue-500" />,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Sass', level: 85 },
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="text-green-500" />,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 65 },
    ]
  },
  {
    title: 'Tools',
    icon: <Settings className="text-orange-500" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Webpack', level: 75 },
      { name: 'Vite', level: 85 },
      { name: 'Docker', level: 60 },
    ]
  },
  {
    title: 'Design',
    icon: <Paintbrush className="text-pink-500" />,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Photoshop', level: 70 },
    ]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-purple-600"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A comprehensive overview of my technical skills and the tools I use to create exceptional digital experiences.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-800"
          >
            <h4 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-800 dark:text-white">
              {category.icon} {category.title}
            </h4>
            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="">
                  <div className="flex justify-between mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-800 rounded">
                    <motion.div
                      className="h-full rounded bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;