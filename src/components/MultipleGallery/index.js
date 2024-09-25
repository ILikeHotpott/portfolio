// MultipleGallery.jsx
import React, { useState, useEffect } from 'react';
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import './index.css';

const MultipleGallery = () => {
    // State to track window width
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200 // Default to large screen if window is undefined
    );

    // Effect to handle window resize
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Determine if the screen is large
    const isLargeScreen = windowWidth >= 1024; // Tailwind's lg breakpoint is 1024px

    // Set movement distance based on screen size
    const movementDistance = isLargeScreen ? '500vw' : '1000vw';

    // Define galleries with dynamic movement distances
    const galleries = [
        {
            direction: 'diagonal1',
            from: { x: `-${movementDistance}`, y: "25vh" },
            to: { x: `${movementDistance}`, y: '25vh' },
            rotation: 'rotate-[45deg]', // Ensure Tailwind is configured to handle arbitrary values
        },
        {
            direction: 'diagonal2',
            from: { x: `${movementDistance}`, y: '25vh' },
            to: { x: `-${movementDistance}`, y: '25vh' },
            rotation: 'rotate-[-45deg]', // Ensure Tailwind is configured to handle arbitrary values
        },
    ];

    // Images to display in the gallery
    const images = [
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--aws-lambda.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--aws-rds.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--aws-s3.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--redis.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--spring-icon.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--aftereffects_1.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--docker_1.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--photoshop.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--redux.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--typescript.svg"
    ];

    return (
        <div className="relative bg-white">
            <Controller>
                <Scene pin duration={2000} triggerHook="onLeave">
                    {(progress) => (
                        <div className="overflow-hidden h-screen w-screen relative">
                            {galleries.map((gallery, index) => (
                                <div
                                    key={index}
                                    className={`image-gallery flex ${gallery.rotation} absolute inset-0`}
                                    style={{ zIndex: galleries.length + index }}
                                >
                                    <Timeline totalProgress={progress} paused>
                                        <Tween from={gallery.from} to={gallery.to} ease="Power1.easeOut">
                                            {images.map((image, idx) => (
                                                <img
                                                    className="w-full h-full object-cover max-h-[40vh]"
                                                    key={idx}
                                                    src={image}
                                                    alt={`Slide ${idx}`}
                                                />
                                            ))}
                                        </Tween>
                                    </Timeline>
                                </div>
                            ))}

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Tween
                                    from={{ opacity: 0, y: 50 }}
                                    to={{ opacity: 1, y: 0 }}
                                    duration={1}
                                    ease="Power2.easeOut"
                                >
                                    <div
                                        className="text-center text-black text-5xl md:text-4xl sm:text-2xl font-bold"
                                    >
                                        And even more, <br />
                                        with my infinite possibilities.
                                    </div>
                                </Tween>
                            </div>
                        </div>
                    )}
                </Scene>
            </Controller>
        </div>
    );
};

export default MultipleGallery;
