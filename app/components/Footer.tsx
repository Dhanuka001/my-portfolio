'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* About */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-2">Dhanuka Rathnayaka</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Frontend Developer passionate about creating beautiful and functional web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-white mb-2">Let's Connect</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2 justify-center md:justify-end"><Mail className="w-4 h-4" /> lohandanuka@gmail.com</li>
            <li className="flex items-center gap-2 justify-center md:justify-end"><Phone className="w-4 h-4" /> +94 71 661 0705</li>
            <li className="flex items-center gap-2 justify-center md:justify-end"><MapPin className="w-4 h-4" /> Malabe, Sri Lanka</li>
          </ul>
        </div>
      </div>

      {/* Social + Copy */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-500 text-center md:text-left">
          &copy; 2025 Dhanuka Rathnayaka. Made with <span className="text-red-500">♥</span> and lots of coffee.
        </p>
        <div className="flex gap-4 text-gray-400">
          <a href="#" target="_blank"><Github className="w-5 h-5 hover:text-white transition" /></a>
          <a href="#" target="_blank"><Linkedin className="w-5 h-5 hover:text-white transition" /></a>
          <a href="#" target="_blank"><Twitter className="w-5 h-5 hover:text-white transition" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
