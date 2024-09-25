import React from 'react';
import { useInView } from 'react-intersection-observer';

const SelfIntroduction = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row min-h-[100vh] bg-white"
    >
      {/* 文本部分 */}
      <div
        className={`w-full md:w-[60%] flex items-center justify-center transition-all duration-700 ease-in-out transform ${
          inView ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="text-center text-black mx-4">
          <p className="text-3xl sm:text-4xl md:text-5xl leading-loose">
            "Hello, I'm Yitong, <br />
            a Full-Stack Developer."
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-loose mt-10">
            I value curiosity, integrity, responsibility — these values inspire me to explore new ideas, stay true to my principles, and take accountability for my actions.
          </p>
        </div>
      </div>

      {/* 图片部分 */}
      <div
        className={`w-full md:w-[40%] flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        <img
          src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/hello.jpg"
          alt="self introduction"
          className="w-full max-h-[100vh] object-cover"
        />
      </div>
    </div>
  );
};

export default SelfIntroduction;
