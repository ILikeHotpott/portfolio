import React from 'react';
import { useInView } from 'react-intersection-observer';
import './index.css';

const Carousel = ({ images }) => {
    const { ref: circleSectionRef, inView: circleSectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="flex items-center justify-center min-h-[60vh] pb-[20%] z-50">
            <div
                ref={circleSectionRef}
                className={`circle-section ${circleSectionInView ? 'flex' : ''}`}
            >
                <div className="relative carousel">
                    <div className="absolute w-full h-full animate-rotate carousel__track">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="carousel__slide"
                                style={{ '--index': index }}
                            >
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className={`bg-cover bg-center ${
                                        image ===
                                        'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/catppuccin--javascript-react.svg'
                                            ? 'self-rotate'
                                            : ''
                                    }`}
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
