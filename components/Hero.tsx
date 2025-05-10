"use client";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import animationData from '../public/animations/plane.json';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-[#E3F2FD] min-h-screen flex flex-col overflow-hidden">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#F8FAFC]/90 backdrop-blur shadow-sm">
        <div className="flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          <Link href="/" className="text-3xl font-extrabold text-[#0077FF]">
            Voyagr
          </Link>

          <ul className="hidden md:flex gap-8 font-medium text-[#0A2540]">
            {["Features", "How It Works", "FAQ", "Contact"].map(item => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-[#0077FF] hover:border-b-2 border-[#0077FF] transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button className="hidden md:block bg-[#0077FF] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#00E7C7] transition">
            🚀 Join Community
          </button>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={25} className="text-[#0077FF]" /> : <FaBars size={25} className="text-[#0077FF]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:hidden bg-[#F8FAFC] shadow-lg"
          >
            <ul className="flex flex-col items-center py-4 gap-4">
              {["Features", "How It Works", "FAQ", "Contact"].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-[#0077FF] transition" onClick={toggleMenu}>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <button className="mt-2 bg-[#0077FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#00E7C7] transition">
                  🚀 Join Community
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-32 md:pt-20">
        
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] leading-tight">
            Cross-Border Delivery,<br />
            <span className="text-[#0077FF]">Reinvented.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0A2540]/80">
            Voyagr connects trusted travelers with individuals and businesses to deliver goods securely, leveraging AI-driven smart matching, faster, cheaper, and more human.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#0077FF] hover:bg-[#00E7C7] text-white font-semibold rounded-lg shadow-md transition">
            🌍 Be Part of Our Community
          </button>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <Player
            autoplay
            loop
            src={animationData}
            className="w-[300px] md:w-[450px] md:h-[450px]"
          />
        </motion.div>

      </div>
    </div>
  );
}
