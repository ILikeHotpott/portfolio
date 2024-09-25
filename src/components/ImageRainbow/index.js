import React, {useEffect, useState} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';
import './index.css';

const HorizontalGallery = () => {
    const images = [
        'https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2',
        'https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2',
        'https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2',
        'https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2',
        'https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2',
    ];

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSize = 150; // 设置为正方形
    const imageMargin = 0; // 紧密排列，无间隔

    // 定义每个画廊的动画和布局设置
    const galleries = [
        {
            id: 'from-up',
            from: {y: '-100%'},
            to: {y: '0%'},
            className: 'gallery from-up',
            layout: 'vertical',
            rotate: 0,
        },
        {
            id: 'from-down',
            from: {y: '100%'},
            to: {y: '0%'},
            className: 'gallery from-down',
            layout: 'vertical',
            rotate: 0,
        },
        {
            id: 'from-left',
            from: {x: '-100%'},
            to: {x: '0%'},
            className: 'gallery from-left',
            layout: 'horizontal',
            rotate: 0,
        },
        {
            id: 'from-right',
            from: {x: '100%'},
            to: {x: '0%'},
            className: 'gallery from-right',
            layout: 'horizontal',
            rotate: 0,
        },
        {
            id: 'diagonal-left-right-down',
            from: {x: '-100%', y: '-100%'},
            to: {x: '0%', y: '0%'},
            className: 'gallery diagonal-left-right-down',
            layout: 'diagonal',
            rotate: 45,
        },
        {
            id: 'diagonal-right-left-up',
            from: {x: '100%', y: '100%'},
            to: {x: '0%', y: '0%'},
            className: 'gallery diagonal-right-left-up',
            layout: 'diagonal',
            rotate: -45,
        },
    ];

    return (
        <Controller>
            <Scene triggerHook={0.3} duration={2000} pin>
                {(progress) => (
                    <div className="gallery-section">
                        {galleries.map((gallery) => (
                            <Timeline key={gallery.id} totalProgress={progress} paused>
                                <Tween from={gallery.from} to={gallery.to} ease="none">
                                    <div className={`${gallery.className} ${gallery.layout}`}>
                                        {gallery.layout === 'diagonal' ? (
                                            <div className="diagonal-container">
                                                {images.map((src, index) => (
                                                    <img
                                                        key={index}
                                                        src={src}
                                                        alt={`Image ${index + 1}`}
                                                        className="gallery-image diagonal-image"
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            images.map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={src}
                                                    alt={`Image ${index + 1}`}
                                                    className="gallery-image"
                                                />
                                            ))
                                        )}
                                    </div>
                                </Tween>
                            </Timeline>
                        ))}
                    </div>
                )}
            </Scene>

            <Scene
                pin
                duration={'200%'}
                triggerHook={0}
            >
                {(progress) => (
                    <div className="image-gallery flex transform rotate-[30deg]">
                        <Timeline totalProgress={progress} paused>
                            <Tween
                                from={{x: '-100vw', y: '-20vh'}}
                                to={{x: '120vw', y: '20vh'}}
                            >
                                {images.map((image, index) => (
                                    <img className="max-h-[300px]" key={index} src={image} alt="album art"/>
                                ))}
                            </Tween>
                        </Timeline>
                    </div>
                )}
            </Scene>
        </Controller>
    );
};

export default HorizontalGallery;
