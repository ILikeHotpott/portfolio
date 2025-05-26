"use client";

import React from 'react';
import "../globals.css";

import MusicNav from "../components/MusicNav";
import WelcomeWords from "../components/WelcomeWords";
import SelfIntroduction from "../components/SelfIntroduction";
import Services from "../components/Services";
import Carousel from "../components/Carousel"; // Assumed component
import MultipleGallery from "../components/MultipleGallery";
import MyFooter from "../components/MyFooter"; // Assumed component
import Link from 'next/link';

const StarLayer = ({className}) => (
    <div className={`${className} absolute inset-0 -z-20 overflow-hidden`}>
        <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900 animate-subtle-pulse">
            {/* Placeholder for a more complex star effect */}
            {Array.from({length: 50}).map((_, i) => (
                <div key={i} className="absolute bg-white rounded-full animate-pulse" style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    opacity: Math.random() * 0.5 + 0.2,
                }}></div>
            ))}
        </div>
    </div>
);


const techImages = [
    "/logos/react.svg", "/logos/python.svg", "/logos/django.svg",
    "/logos/langchain.svg", "/logos/java.svg", "/logos/js.svg",
    "/logos/mysql.svg", "/logos/tailwind.svg", "/logos/aws.svg",
    "/logos/nginx.svg",
];

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-gray-900 text-gray-100 selection:bg-cyan-500 selection:text-gray-900">

            <MusicNav/>

            <main className="flex flex-col pt-[72px]">
                <section
                    id="hero"
                    className="relative isolate flex flex-col items-center justify-center h-[calc(100dvh-72px)] min-h-[600px] overflow-hidden px-6 text-center"
                >
                    <StarLayer className="opacity-70"/>
                    <WelcomeWords/>

                    <div
                        className="relative z-10 animate-slide-in-fade">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
                            Yitong Liu
                        </h1>
                        <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-medium mb-8">
                             Code, Create, Captivate.
                        </p>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
                            Full-Stack Developer & Creative Technologist
                        </p>
                        <Link
                            href="/projects"
                            className="px-8 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-lg text-lg hover:bg-cyan-400 transition-colors duration-300 shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105"
                        >
                            My Projects
                        </Link>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                        <svg className="w-8 h-8 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </section>

                <section id="about">
                    <SelfIntroduction/>
                </section>


                <section id="services"
                         className="bg-gray-900">
                    <Services/>
                </section>

                <section id="stack" className="py-20 md:py-28 bg-gray-800/30">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-100">
                            My Technology <span className="text-cyan-400">Arsenal</span>
                        </h2>
                        <p className="mt-4 mb-12 text-lg text-gray-400 max-w-2xl mx-auto">
                            Leveraging a modern stack to build robust, scalable, and efficient applications.
                        </p>
                        <div className="w-full max-w-5xl mx-auto">
                            <Carousel images={techImages} speed={2500}/>
                        </div>
                    </div>
                </section>

                <section id="gallery" className="relative">
                    <MultipleGallery/>
                </section>
            </main>

            <MyFooter/>
        </div>
    );
}