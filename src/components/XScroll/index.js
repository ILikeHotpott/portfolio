import {useEffect, useRef} from "react";
import WelcomeWords from "../WelcomeWords";
import MusicNav from "../MusicNav";
import Carousel from "../Carousel";

const XScroll = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            // 阻止默认的竖向滚动行为
            e.preventDefault();

            if (scrollRef.current) {
                scrollRef.current.scrollLeft += e.deltaY;
            }
        };

        window.addEventListener('wheel', handleWheel, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const images = [
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--python.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--django-icon.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--java-light.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--javascript.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/catppuccin--javascript-react.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--mysql-light.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/ri--nextjs-fill.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--aws-light.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--adobe-photoshop.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--aftereffects.svg",
    ];

    return (
        <div
            ref={scrollRef}
            className="flex overflow-x-auto whitespace-nowrap w-[100vw] h-[100vh]"
        >

            <div className="fixed top-0 left-0 z-50 w-full bg-black">
                <MusicNav/>
            </div>

            <div className="min-w-[100vw] h-[100vh] mt-20">
                <WelcomeWords/>
            </div>

            <div className="min-w-[100vw] h-[100vh] mt-20">
                <WelcomeWords/>
            </div>

            <div className="min-w-[100vw] h-[100vh]">
                <section className="panel">
                    <div className="mt-32 text-center flex justify-center items-center text-white text-8xl font-bold">
                        WHO AM I?
                    </div>
                    <div className="mt-32 text-center flex justify-center items-center text-white text-3xl">
                        A Full Stack Developer with design, development, and deployment skills.
                    </div>
                </section>
            </div>

            <div style={{minWidth: '100vw', height: '100vh'}}>
                <section className="panel">
                    <div className="text-center flex justify-center items-center text-white text-8xl font-bold">
                        WHAT CAN I DO?
                    </div>
                    <div className="mt-64">
                        <Carousel images={images}/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default XScroll;
