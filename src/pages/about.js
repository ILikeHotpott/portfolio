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
        threshold: 0,
        triggerOnce: true,
    });

    const {ref: secondRef, inView: secondInView} = useInView({
        threshold: 0.5,
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
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_0447+(1).jpeg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_0583+(1).jpeg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_0618+(1).jpeg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_2545+(1).jpeg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel2+(1).jpg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel4+(1).jpg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel6+(1).jpg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_2816+(1).jpeg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel10+(1).jpg",
    ];

    const gallery_speed = 0.4;
    const gradient_color = "bg-gradient-to-r from-orange-500 via-purple-400 to-blue-500";

    // Calculate size for ScrollGallery based on screen width
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
        // Mobile screens
        gallerySize = 160;
    } else if (windowWidth < 768) {
        // Small screens
        gallerySize = 160;
    } else if (windowWidth < 1024) {
        // Medium screens
        gallerySize = 230;
    } else {
        gallerySize = 250;
    }
    console.log(windowWidth, gallerySize);

    return (
        <div className="bg-white min-h-screen">
            <div className={"sticky top-0 z-50"}>
                <MusicNav/>
            </div>

            {/* About me */}
            <div
                ref={firstRef}
                className="flex flex-col md:flex-row items-stretch justify-between md:h-[100vh] mx-auto w-[90%]"
            >
                {/* Text section */}
                <div
                    className={`text-black w-full md:w-[60%] flex items-center justify-center md:h-full px-5 md:px-20 transition duration-700 ease-in-out ${
                        firstInView ? 'translate-y-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                >
                    <div className="mx-4 w-full">
                        <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-loose mb-8">
                            "About me"
                        </p>
                        <p className="text-base sm:text-lg md:text-2xl text-black">
                            I define myself as an open-minded artisan, constantly driven by an endless
                            <span
                                className="px-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                curiosity
                            </span>
                            to explore new possibilities. I am particularly skilled at combining the things I love with
                            my technical expertise. I believe this allows me to create products that are infused with
                            <span
                                className="px-2 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                                passion
                            </span>
                            and
                            <span
                                className="pl-2 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                                warmth
                            </span>.
                        </p>
                    </div>
                </div>
                {/* Image section */}
                <div
                    className={`w-full md:w-[40%] flex items-center justify-center md:h-full transition-all duration-700 ease-in-out transform ${
                        firstInView ? 'translate-y-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`}
                >
                    <img
                        src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG432.jpg"
                        alt="About me"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Journey of Programming */}
            <div
                ref={secondRef}
                className="flex flex-col-reverse md:flex-row items-stretch justify-between md:h-[100vh] mt-10 mx-auto w-[90%]"
            >

                {/* Image section */}
                <div
                    className={`w-full md:w-[40%] flex items-center justify-center md:h-full transition-all duration-700 ease-in-out transform ${
                        secondInView ? 'translate-y-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                >
                    <img
                        src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG433.jpg"
                        alt="Journey of Programming"
                        className="w-full h-auto"
                    />
                </div>
                {/* Text section */}
                <div
                    className={`text-black w-full md:w-[60%] flex items-center justify-center md:h-full px-5 md:px-20 transition-all duration-700 ease-in-out transform ${
                        secondInView ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                    }`}
                >
                    <div className="mx-4 w-full">
                        <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-loose mb-8">
                            "Journey of
                            <span
                                className="pl-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Programming
                            </span>
                            "
                        </p>
                        <p className="text-base sm:text-lg md:text-2xl text-black">
                            The journey began in early 2023, when I printed my first line of
                            <span
                                className="px-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                                "Hello world"
                            </span>
                            in the computer lab at school, and I knew right away that I loved this feeling. From that
                            moment
                            on, I embarked on a rapid learning journey, starting with foundational knowledge, moving on
                            to solving algorithm problems, and eventually developing complete projects. This path has
                            been full of challenges and growth, but I know how lucky I am to be doing what I love.
                        </p>
                        <div className="flex items-center mt-8 pb-6">
                            <Link href="/projects">
                                <Button radius="full" color="primary" className="text-lg">
                                    Some of my projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Galleries */}
            <div className={`min-h-[110vh] ${gradient_color} mt-10`}>
                <div className="mb-10 text-center text-white lg:text-4xl md:text-3xl text-2xl">
                    <div className="pt-20 mb-10">
                        Outside of programming, I also enjoy music,
                    </div>
                    <ScrollGallery
                        images={music_images}
                        speed={gallery_speed}
                        margin={10}
                        direction="left"
                        size={gallerySize}
                    />
                </div>

                <div className="mt-28 mb-10 text-center text-white lg:text-4xl md:text-3xl text-2xl">
                    and traveling.
                </div>
                <ScrollGallery
                    images={travel_images}
                    speed={gallery_speed}
                    margin={10}
                    direction="right"
                    size={gallerySize}
                />
            </div>

            <MyFooter/>
        </div>
    );
};

export default About;