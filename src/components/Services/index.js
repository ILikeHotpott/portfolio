import React from 'react';
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`min-h-[70vh] bg-gray-100 py-10 duration-700 ease-in-out transform ${
      inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">What Can I Do</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {/* 前端开发 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <img src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/webdev.svg"
              alt="Web Development" className="h-12 w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">Frontend Development</h3>
          <p className="text-gray-600 text-center text-base md:text-lg">
            I create responsive, user-friendly interfaces that combine clean design with intuitive functionality, ensuring a seamless experience across all devices.
          </p>
        </div>

        {/* 后端开发 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <img src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/backend.svg"
              alt="Backend Development" className="h-12 w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">Backend Development</h3>
          <p className="text-gray-600 text-center text-base md:text-lg">
            Backend development focuses on creating the logic and infrastructure that support web and applications. I can implement robust APIs, handle data storage, and ensure system security and performance.
          </p>
        </div>

        {/* 云开发 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <img src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/cloud.svg"
              alt="Cloud Development" className="h-12 w-12" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">Cloud Development</h3>
          <p className="text-gray-600 text-center text-base md:text-lg">
            I help businesses scale with cloud solutions, deploying and managing applications on platforms like AWS to optimize performance, flexibility, and cost-efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
