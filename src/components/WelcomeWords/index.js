import "./index.css"

const WelcomeWords = () => {
  return (
    <div className="welcome-words flex justify-center items-center bg-amber-50 overflow-hidden">
      <video
        src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/Sep22.mp4"
        autoPlay
        muted
        playsInline
        className="object-contain w-full h-full"
      ></video>
    </div>
  );
};

export default WelcomeWords;
