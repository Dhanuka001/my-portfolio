'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Correct easing value
    },
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-36 px-6 sm:px-10 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center text-purple-600 mb-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Let&apos;s Work Together
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
      >
        I&apos;m always interested in hearing about new opportunities and exciting projects.
        Whether you&apos;re a company looking to hire or a fellow developer, let&apos;s connect!
      </motion.p>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={2}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow"
        >
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" aria-label="Email" />
              <span>lohandanuka@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" aria-label="Phone" />
              <span>+94 71 661 0705</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" aria-label="Location" />
              <span>Malabe, Sri Lanka</span>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Follow me on social media</p>
            <div className="flex gap-4 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/Dhanuka001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhanuka-rathnayaka1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
              </a>
              <a
                href="mailto:lohandanuka@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          action="#"
          method="POST"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={3}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow space-y-4"
        >
          <h3 className="text-lg font-semibold mb-4">Send Me a Message</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 ring-purple-500"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 ring-purple-500"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 ring-purple-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:scale-105 transition"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
