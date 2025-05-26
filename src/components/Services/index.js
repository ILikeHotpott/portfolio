"use client";
import React from 'react';
import {useInView} from "react-intersection-observer";

// Placeholder for icons - ideally use high-quality SVGs
const ServiceIcon = ({src, alt}) => (
    <div className="p-3 mb-4 bg-cyan-500/20 rounded-full inline-block ring-2 ring-cyan-500">
        <img src={src} alt={alt} className="h-10 w-10"/> {/* Or use Heroicons/other SVG libraries */}
    </div>
);

const ServiceCard = ({iconSrc, title, children}) => (
    <div
        className="bg-gray-800 shadow-xl rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 group">
        <div className="flex justify-center mb-6">
            {/* Replace with actual SVG components or better <img> handling */}
            {/* For example using Heroicons: <CloudArrowUpIcon className="h-12 w-12 text-cyan-400" /> */}
            <div className="p-4 bg-gray-700 rounded-full transition-all duration-300 group-hover:bg-cyan-400">
                <img src={iconSrc} alt={title}
                     className="h-10 w-10 filter invert group-hover:filter-none transition-all duration-300"/>
            </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-100 text-center mb-4 group-hover:text-cyan-300 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-center text-md leading-relaxed">
            {children}
        </p>
    </div>
);

const Services = () => {
    const {ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div ref={ref}
             className={`min-h-[70vh] bg-gray-800/50 py-20 md:py-28 transition-opacity duration-1000 ease-in-out ${
                 inView ? 'opacity-100' : 'opacity-0'
             }`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">
                        What I <span className="text-cyan-400">Deliver</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        From concept to deployment, I provide a comprehensive suite of development services.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    <ServiceCard iconSrc="/services/webdev.svg" title="Frontend Development">
                        Crafting responsive, intuitive user interfaces with a focus on clean design and seamless
                        cross-device performance.
                    </ServiceCard>
                    <ServiceCard iconSrc="/services/backend.svg" title="Backend Development">
                        Building robust and scalable server-side logic, APIs, and database solutions with security and
                        performance at their core.
                    </ServiceCard>
                    <ServiceCard iconSrc="/services/cloud.svg" title="AI Application Development">
                        Bringing ideas to life with modern AI — whether it's chatbots, voice assistants, or creative
                        tools powered by LLMs, I turn models into magical experiences.
                    </ServiceCard>

                </div>
            </div>
        </div>
    );
};
export default Services;