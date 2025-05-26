"use client";
import React, {useState, useEffect} from 'react';
import Link from "next/link";

const MusicNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // The parent div with z-20 is good.
        // The w-screen might be better handled by the parent header in Home.js
        <div className="relative z-50"> {/* Increased z-index for Nav */}
            <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out
                            ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
                <div className="brand-container">
                    <Link href="/"
                          className="text-gray-100 text-3xl font-bold tracking-tight hover:text-cyan-400 transition-colors">
                        Yitong Liu
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8 text-lg">
                    <Link href="/"
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">HOME</Link>
                    <Link href="/about/"
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">ABOUT</Link>
                    <Link href="/projects/"
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">PROJECTS</Link>
                    <Link href="/contact/"
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">CONTACT</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-200 focus:outline-none hover:text-cyan-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu - Enhanced Animation & Styling */}
            <div
                className={`md:hidden fixed inset-x-0 top-[72px]  overflow-hidden transition-all duration-500 ease-in-out bg-gray-900/95 backdrop-blur-lg shadow-xl
                            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col items-center space-y-6 py-8">
                    <Link href="/" className="text-gray-100 hover:text-cyan-400 text-xl py-2"
                          onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link href="/about" className="text-gray-100 hover:text-cyan-400 text-xl py-2"
                          onClick={() => setIsOpen(false)}>ABOUT</Link>
                    <Link href="/projects" className="text-gray-100 hover:text-cyan-400 text-xl py-2"
                          onClick={() => setIsOpen(false)}>PROJECTS</Link>
                    <Link href="/contact" className="text-gray-100 hover:text-cyan-400 text-xl py-2"
                          onClick={() => setIsOpen(false)}>CONTACT</Link>
                </div>
            </div>
            {/* StarLayer is better placed in the Hero section or globally if it's a page background */}
            {/* <StarLayer className="absolute inset-0 z-0"/> */}
        </div>
    );
};
export default MusicNav;