"use client";

import React, {useState, useEffect} from "react";
import {Controller, Scene} from "react-scrollmagic";
import {Timeline, Tween} from "react-gsap";

// Hook to track viewport width
const useWindowWidth = () => {
    const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const onResize = () => setW(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return w;
};

export default function MultipleGallery() {
    const width = useWindowWidth();
    const isLarge = width >= 1024;
    const movement = isLarge ? "500vw" : "1000vw";

    // centred X‑shape: y = 0, wrapper div centred via translate(-50%,‑50%)
    const galleries = [
        {
            id: "diagLTR",
            from: {x: `-${movement}`, y: "0"},
            to: {x: `${movement}`, y: "0"},
            rotation: 45,
        },
        {
            id: "diagRTL",
            from: {x: `${movement}`, y: "0"},
            to: {x: `-${movement}`, y: "0"},
            rotation: -45,
        },
    ];

    const icons = [
        "/gallery/lambda.svg",
        "/gallery/rds.svg",
        "/gallery/s3.svg",
        "/gallery/redis.svg",
        "/gallery/spring.svg",
        "/gallery/ae.svg",
        "/gallery/docker.svg",
        "/gallery/ps.svg",
        "/gallery/redux.svg",
        "/gallery/ts.svg",
    ];
    const imgs = [...icons, ...icons];

    return (
        <div className="relative bg-gray-900 py-20">
            <Controller>
                <Scene pin duration={isLarge ? 2500 : 3000} triggerHook="onLeave" offset={-100}>
                    {(progress) => (
                        <div className="overflow-hidden h-screen w-screen relative">
                            {galleries.map((g, i) => (
                                <div
                                    key={g.id}
                                    className="absolute top-1/2 left-1/2 flex items-center"
                                    style={{transform: "translate(-50%,-50%)", zIndex: 10 + i}}
                                >
                                    <Timeline totalProgress={progress} paused>
                                        <Tween from={g.from} to={g.to} ease="Linear.easeNone"
                                               wrapper={<div style={{transform: `rotate(${g.rotation}deg)`}}/>}>
                                            <div className="flex whitespace-nowrap">
                                                {imgs.map((src, idx) => (
                                                    <img
                                                        key={`${g.id}-${idx}`}
                                                        src={src}
                                                        alt="tech icon"
                                                        className="h-20 w-20 md:h-56 md:w-56 object-contain bg-gray-700/50 p-3 rounded-lg shadow-lg mx-4 flex-shrink-0"
                                                    />
                                                ))}
                                            </div>
                                        </Tween>
                                    </Timeline>
                                </div>
                            ))}

                            {/* overlay text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                                <Tween from={{opacity: 0, scale: 0.8, y: 50}} to={{opacity: 1, scale: 1, y: 0}}
                                       duration={1.5} ease="Expo.easeOut" totalProgress={progress * 2} paused>
                                    <div className="text-center p-4 bg-gray-900/70 backdrop-blur-sm rounded-lg">
                                        <h2 className="text-gray-100 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                            And much more, <br/>
                                            <span className="text-cyan-400">with endless possibilities.</span>
                                        </h2>
                                    </div>
                                </Tween>
                            </div>
                        </div>
                    )}
                </Scene>
            </Controller>
        </div>
    );
}
