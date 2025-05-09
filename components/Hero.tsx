'use client';

import { motion } from 'framer-motion';
import { FaPlaneDeparture } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200 text-center px-4 overflow-hidden">
      {/* Animated Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold text-gray-800 max-w-3xl leading-tight"
      >
        Cross-Border Delivery, Powered by People
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-4 text-lg text-gray-600 max-w-xl"
      >
        Voyagr is a mobile app connecting trusted travelers with people who need to send items across borders — fast, affordable, and community-powered.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#waitlist"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-indigo-700 transition"
      >
        Join the Waitlist
      </motion.a>

      {/* Flying Plane */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: '100vw' }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        className="absolute top-10 left-0 text-4xl text-indigo-600 opacity-70"
      >
        <FaPlaneDeparture />
      </motion.div>
    </section>
  );
}
