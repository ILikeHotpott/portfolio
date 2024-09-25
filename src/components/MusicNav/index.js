// MusicNav.jsx
import React, {useState} from 'react';
import StarLayer from "./StarLayer";
import Link from "next/link";

const MusicNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-20">
            <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
                <div className="brand-container">
                    <a href="/" className="text-white text-2xl font-bold">
                        Yitong Liu
                    </a>
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 text-lg">
                    <a href="/" className="text-white hover:text-gray-300">HOME</a>
                    <a href="/about/" className="text-white hover:text-gray-300">ABOUT</a>
                    <a href="/projects/" className="text-white hover:text-gray-300">PROJECTS</a>
                    <a href="/contact/" className="text-white hover:text-gray-300">CONTACT</a>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-2 py-4 md:hidden">
                    <Link href="/" className="text-white hover:text-gray-300">HOME</Link>
                    <Link href="/about" className="text-white hover:text-gray-300">ABOUT</Link>
                    <Link href="/projects" className="text-white hover:text-gray-300">PROJECTS</Link>
                    <Link href="/contact" className="text-white hover:text-gray-300">CONTACT</Link>
                </div>
            )}
            <StarLayer className="absolute inset-0 z-0"/>
        </div>
    );
};

export default MusicNav;
