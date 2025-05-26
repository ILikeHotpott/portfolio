"use client";
import React from 'react';
import {useInView} from 'react-intersection-observer';

const SelfIntroduction = () => {
    const {ref, inView} = useInView({
        threshold: 0.4, // Adjust threshold for when animation triggers
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className="flex flex-col lg:flex-row items-center min-h-[80vh] md:min-h-[70vh] py-16 lg:py-24 bg-gray-900 text-gray-100" // Darker section background
        >
            {/* Text Section */}
            <div
                className={`w-full lg:w-3/5 flex flex-col justify-center p-8 md:p-12 lg:p-16 transition-all duration-1000 ease-out ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Hello, I'm <span className="text-cyan-400">Yitong</span>, <br/>
                    a Full-Stack Developer.
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8">
                    Driven by curiosity and a commitment to integrity, I transform complex challenges into elegant and
                    responsible software solutions.
                </p>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                    My core values—curiosity, integrity, and responsibility—are not just words; they are the principles
                    that guide my approach to development, inspiring me to explore innovative ideas, uphold ethical
                    standards, and deliver impactful results.
                </p>
            </div>

            <div
                className={`w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-0 transition-all duration-1000 ease-out delay-200 ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
            >
                <img
                    src="/pictures/hello.jpg" // Consider a more abstract/professional image if this is a personal photo
                    alt="Yitong Liu - Full-Stack Developer"
                    className="rounded-lg shadow-2xl object-cover w-full max-w-md lg:max-w-full max-h-[70vh] aspect-[3/4] lg:aspect-auto" // Added aspect ratio for consistency
                />
            </div>
        </div>
    );
};
export default SelfIntroduction;