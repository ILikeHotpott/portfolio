import React from "react";
import { Icon } from "@iconify/react";

const MyFooter = () => {
  return (
    <footer className="bg-beige text-center py-8">
      <div className="max-w-screen-lg mx-auto">
        <hr className="border-t-2 border-gray-500 mb-4" />
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 my-4">
          <a href="https://www.linkedin.com/in/yitong-liu-0239552b4/"
            className="text-purple-400 hover:text-purple-500">
            <Icon className="text-default-400" icon="skill-icons:linkedin" width={40} md={{ width: 56 }} />
          </a>
          <a href="https://github.com/ILikeHotpott/" className="text-purple-400 hover:text-purple-500">
            <Icon className="text-default-400" icon="octicon:mark-github-16" width={40} md={{ width: 56 }} />
          </a>
          <a href="https://www.instagram.com/yitong1210/" className="text-purple-400 hover:text-purple-500">
            <Icon className="text-default-400" icon="skill-icons:instagram" width={40} md={{ width: 56 }} />
          </a>
        </div>
        <div className="text-sm text-black">
          Designed and Developed by Yitong Liu
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
