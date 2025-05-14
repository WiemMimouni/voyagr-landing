"use client";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import animationData from '../public/animations/plane.json';
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/Voyagr_ Connecting the World.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Blur + Shadow */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-transparent border-none"}`}>
  <div className="flex items-center justify-between py-3 md:py-4 px-6 max-w-7xl mx-auto">
    {/* Logo */}
    <Link href="/" className="text-2xl md:text-3xl font-semibold tracking-tight text-white hover:opacity-90 transition">
      Voyagr<span className="text-cyan-400"> Inc.</span>
    </Link>

    {/* Links */}
    <ul className="hidden md:flex gap-8 font-medium text-white/90 text-sm tracking-wide">
      {["Features", "How It Works", "FAQ", "Contact"].map(item => (
        <li key={item}>
          <Link
            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
            className="hover:text-cyan-300 transition"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <button className="hidden md:block bg-gradient-to-r from-sky-500 to-cyan-500 text-sm px-4 py-2 rounded-full font-medium text-white shadow hover:scale-105 transition">
      🚀 Join
    </button>

    {/* Mobile Menu Toggle */}
    <button className="md:hidden" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes size={22} className="text-white" /> : <FaBars size={22} className="text-white" />}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {isMenuOpen && (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="md:hidden bg-black/80 text-white backdrop-blur-md"
    >
      <ul className="flex flex-col items-center py-4 gap-4">
        {["Features", "How It Works", "FAQ", "Contact"].map(item => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="hover:text-cyan-300 transition"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <button className="mt-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-medium transition hover:scale-105">
            🚀 Join
          </button>
        </li>
      </ul>
    </motion.div>
  )}
</nav>





      {/* Hero Content */}
      <div className="relative z-20 flex-grow flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-32 md:pt-24">

        {/* Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Cross-Border Delivery,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Reinvented.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-gray-200">
            Voyagr connects trusted travelers with individuals and businesses to deliver goods securely using smart-matching AI to make shipping faster, more affordable, and more human.
          </p>
          <div className="relative inline-block text-left mt-4">
            <button
              onClick={() => setOpen(!open)}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition w-full md:w-auto"
            >
              🌍 Be Part of Our Community
            </button>

            {open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div ref={modalRef} className="w-[90vw] max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg text-left">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2sn9sPQL0SjIRjARXO-iNYUGmnMRRwzRHdbXT-0QfZtGzgg/viewform?usp=dialog" target="_blank" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">🇬🇧 English Form</a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScHNtZM-nIh1MEF8UC0laLWVnJshJ-_uF8WRrAPm7rjiirkIA/viewform?usp=dialog" target="_blank" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">🇫🇷 Formulaire Français</a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5iV6dLLCp4DlkrUj3rCHIZE8ywnHHz1ZAvqtzhtaSR0K4ag/viewform?usp=dialog" target="_blank" className="block px-4 py-2 hover:bg-gray-100 text-gray-700" style={{ direction: "rtl", textAlign: "left" }}>النموذج بالعربية 🇸🇦</a>
                  <button onClick={() => setOpen(false)} className="block w-full text-center text-sm text-blue-600 py-2 hover:underline">✖️ Close</button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Animation */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mb-12 md:mb-0"
        >
          <Player
            autoplay
            loop
            src={animationData}
            className="w-[320px] md:w-[460px] md:h-[460px]"
          />
        </motion.div>
      </div>
      <br></br>
    </div>
  );
}
