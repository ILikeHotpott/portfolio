import "../globals.css";
import MusicNav from "../components/MusicNav";
import React from "react";
import {useInView} from 'react-intersection-observer';
import ScrollGallery from "../components/ScrollGallery";
import {Button} from "@nextui-org/react";
import MyFooter from "../components/MyFooter";
import Link from "next/link";

const About = () => {
    const {ref: firstRef, inView: firstInView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const {ref: secondRef, inView: secondInView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const {ref: thirdRef, inView: thirdInView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const music_images = [
        "https://i.scdn.co/image/ab67616d0000b273c94603dcb78ec39322cebb5b",
        "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
        "https://i.scdn.co/image/ab67616d0000b2734a82d19a6315bad34b34be61",
        "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa",
        "https://i.scdn.co/image/ab67616d0000b273f72f1e38e9bd48f18a17ed9b",
        "https://i.scdn.co/image/ab67616d0000b2738a2ce3f148f57584269c3782",
        "https://i.scdn.co/image/ab67616d0000b273e2d156fdc691f57900134342",
        "https://i.scdn.co/image/ab67616d0000b2735ef4660298ae29ee18799fc2",
        "https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634",
        "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe"
    ];
    const travel_images = [
        "/pictures/travel1.jpeg",
        "/pictures/travel2.jpeg",
        "/pictures/travel3.jpeg",
        "/pictures/travel4.jpeg",
        "/pictures/travel5.jpeg",
        "/pictures/travel6.jpeg",
        "/pictures/travel7.jpg",
        "/pictures/travel8.jpg",
        "/pictures/travel9.jpg",
        "/pictures/travel10.jpg",
        "/pictures/travel11.jpg",
    ];

    const gallery_speed = 0.4;

    const [windowWidth, setWindowWidth] = React.useState(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    );

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    let gallerySize;
    if (windowWidth < 640) {
        gallerySize = 150;
    } else if (windowWidth < 768) {
        gallerySize = 180;
    } else if (windowWidth < 1024) {
        gallerySize = 220;
    } else {
        gallerySize = 250;
    }

    return (
        <div className="bg-slate-900 text-slate-200 min-h-screen selection:bg-sky-500 selection:text-white">
            <div className={"sticky top-0 z-50 backdrop-blur-md bg-slate-900/70"}>
                <MusicNav/>
            </div>

            {/* About me */}
            <section
                id="about-me"
                ref={firstRef}
                className="flex flex-col md:flex-row items-center justify-between min-h-[85vh] md:min-h-[90vh] mx-auto w-[90%] lg:w-[85%] py-12 md:py-20"
            >
                {/* Text section */}
                <div
                    className={`w-full md:w-[55%] flex flex-col justify-center md:h-full px-4 md:px-8 lg:px-12 transition-all duration-1000 ease-in-out ${
                        firstInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        About Me
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed">
                        I define myself as an open-minded artisan, constantly driven by an endless
                        <span
                            className="px-1.5 mx-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                            curiosity
                        </span>
                        to explore new possibilities. I am particularly skilled at combining the things I love with
                        my technical expertise. I believe this allows me to create products that are infused with
                        <span
                            className="px-1.5 mx-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">
                            passion
                        </span>
                        and
                        <span
                            className="px-1.5 ml-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">
                            warmth
                        </span>.
                    </p>
                </div>
                {/* Image section */}
                <div
                    className={`w-full md:w-[45%] flex items-center justify-center md:h-full mt-10 md:mt-0 transition-all duration-1000 ease-in-out delay-200 ${
                        firstInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    <img
                        src="/pictures/WechatIMG432.jpg"
                        alt="Yitong Liu - About me"
                        className="rounded-lg shadow-2xl shadow-sky-900/50 object-cover max-h-[70vh] w-auto"
                    />
                </div>
            </section>

            {/* Journey of Programming */}
            <section
                id="journey"
                ref={secondRef}
                className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[85vh] md:min-h-[90vh] mx-auto w-[90%] lg:w-[85%] py-12 md:py-20"
            >
                {/* Image section */}
                <div
                    className={`w-full md:w-[45%] flex items-center justify-center md:h-full mb-10 md:mb-0 transition-all duration-1000 ease-in-out ${
                        secondInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    <img
                        src="/pictures/WechatIMG433.jpg"
                        alt="Journey of Programming"
                        className="rounded-lg shadow-2xl shadow-sky-900/50 object-cover max-h-[70vh] w-auto"
                    />
                </div>
                {/* Text section */}
                <div
                    className={`w-full md:w-[55%] flex flex-col justify-center md:h-full px-4 md:px-8 lg:px-12 transition-all duration-1000 ease-in-out delay-200 ${
                        secondInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        Journey of
                        <span
                            className="pl-2 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Programming
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed">
                        The journey began in early 2023, when I printed my first line of
                        <span
                            className="px-1.5 mx-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-400 bg-clip-text text-transparent font-semibold">
                            "Hello world"
                        </span>
                        in the computer lab at school, and I knew right away that I loved this feeling. From that
                        moment
                        on, I embarked on a rapid learning journey, starting with foundational knowledge, moving on
                        to solving algorithm problems, and eventually developing complete projects. This path has
                        been full of challenges and growth, but I know how lucky I am to be doing what I love.
                    </p>
                    <div className="flex items-center mt-10 pb-6">
                        <Link href="/projects" passHref>
                            <Button
                                radius="full"
                                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-sky-500/50 transition-all duration-300"
                            >
                                Explore My Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Scroll Galleries */}
            <section id="hobbies" className="bg-slate-800 py-16 md:py-24 lg:py-32 mt-10 md:mt-16">
                <div 
                    ref={thirdRef}
                    className={`transition-all duration-1000 ease-in-out ${thirdInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="mb-12 md:mb-16 text-center text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold">
                        <p className="pt-8 md:pt-12 mb-6 md:mb-10">
                            Outside of programming, I also enjoy music,
                        </p>
                    </div>
                </div>
                <ScrollGallery
                    images={music_images}
                    speed={gallery_speed}
                    margin={15}
                    direction="left"
                    size={gallerySize}
                />

                <div 
                    className={`transition-all duration-1000 ease-in-out delay-300 ${thirdInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="mt-16 md:mt-24 mb-12 md:mb-16 text-center text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold">
                        and traveling.
                    </div>
                </div>
                <ScrollGallery
                    images={travel_images}
                    speed={gallery_speed}
                    margin={15}
                    direction="right"
                    size={gallerySize}
                />
            </section>

            <MyFooter/>
        </div>
    );
};

export default About;