import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageRevealStyled = styled.div`
  height: 200vh; /* 足够的滚动空间 */
  position: relative;

  .image-container {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image.first {
    z-index: 2;
  }

  .image.second {
    z-index: 1;
  }
`;

const ImageReveal = () => {
  const firstImageRef = useRef(null);

  useEffect(() => {
    gsap.to(firstImageRef.current, {
      x: '100%', // 从左到右滑动出去
      ease: 'none',
      scrollTrigger: {
        trigger: '.image-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true, // 滚动条同步动画
      },
    });
  }, []);

  return (
    <ImageRevealStyled>
      <div className="image-container">
        {/* 第一张图片（会消失的图片） */}
        <img
          ref={firstImageRef}
          className="image first"
          src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/mypic1.jpg"
          alt="First"
        />
        {/* 第二张图片（显示出来的图片） */}
        <img
          className="image second"
          src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/mypic2."
          alt="Second"
        />
      </div>
    </ImageRevealStyled>
  );
};

export default ImageReveal;
