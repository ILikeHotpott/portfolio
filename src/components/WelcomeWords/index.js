"use client";

import React from 'react';

const WelcomeWords = () => {
    return (
        <div
            className="welcome-words absolute inset-0 w-full h-full overflow-hidden -z-10">
            <video
                src="/Sep22.mp4"
                autoPlay
                muted
                playsInline
                className="object-cover w-full h-full opacity-40 "
            ></video>
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
    );
};
export default WelcomeWords;