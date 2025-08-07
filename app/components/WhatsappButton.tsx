'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-15 right-15 z-50">
      <div className="relative w-12 h-12">
        {/* Pulse Circle Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping animation-duration-[3s]"></span>

        {/* WhatsApp Icon Button */}
        <motion.a
          href="https://wa.me/94716610705"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-300 transition-transform transform hover:scale-110"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <FaWhatsapp size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsAppButton