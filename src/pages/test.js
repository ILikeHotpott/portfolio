import "../globals.css";
import ChangeFilter from "../components/ChangeFilter";
import React from "react";


const Test = () => {
    return (
        <div className="bg-white w-full h-full flex">
            <div className={"min-h-[100vh] text-black w-1/2 h-full flex justify-center items-center bg-green-500"}>
                Hello world.
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <ChangeFilter
                    image1={"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG431.jpg"}
                    image2={"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG432.jpg"}
                />
            </div>
        </div>
    );
};

export default Test;
