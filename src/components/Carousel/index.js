import React from 'react';
import {useInView} from 'react-intersection-observer';
import './index.css';

const Carousel = ({images}) => {
    const {ref: circleSectionRef, inView: circleSectionInView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

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

    let imageWidth;
    let rotationRadius;
    if (windowWidth >= 1024) {
        imageWidth = 400;
        rotationRadius = 500;
    } else if (windowWidth >= 768) {
        imageWidth = 300;
        rotationRadius = 400;
    } else {
        imageWidth = 110;
        rotationRadius = 180;
    }
    return (
        <div className="flex items-center justify-center min-h-[60vh] pb-[20%] z-50">
            <div
                ref={circleSectionRef}
                className={`circle-section ${circleSectionInView ? 'flex' : ''}`}>
                <div className="relative w-[300px] h-[300px] carousel">
                    <div
                        className="absolute w-full h-full transform-style-3d animate-rotate linear infinite carousel__track">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="absolute top-[10%] left-[10%] w-[80%] h-[80%] carousel__slide"
                                style={{transform: `rotateY(${index * 36}deg) translateZ(${rotationRadius}px)`}}
                            >
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className={`bg-cover bg-center  ${
                                        image === "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/catppuccin--javascript-react.svg"
                                            ? 'self-rotate' : ''
                                    }`}
                                    style={{
                                        width: `${imageWidth}px`,
                                        height: `${imageWidth}px`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
