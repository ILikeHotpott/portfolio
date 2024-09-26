import "../globals.css";
import WelcomeWords from "../components/WelcomeWords";
import MusicNav from "../components/MusicNav";
import Carousel from "../components/Carousel";
import SelfIntroduction from "../components/SelfIntroduction";
import Services from "../components/Services";
import MyFooter from "../components/MyFooter";
import MultipleGallery from "../components/MultipleGallery";

const Home = () => {
    const images = [
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/catppuccin--javascript-react.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--python.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--django-icon.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--java-light.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--javascript.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--graphql.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--mysql-light.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/vscode-icons--file-type-tailwind.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/skill-icons--aws-light.svg",
        "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/logos--nginx.svg"
    ];
    const gradient_color = "bg-gradient-to-r from-orange-500 via-purple-400 to-blue-500";

    return (
        <div className="bg-white">
            <div id="pinContainer">
                <div id="slideContainer">
                    <div className="sticky top-0 z-50">
                        <MusicNav/>
                    </div>
                    <section className="panel">
                        <WelcomeWords/>
                    </section>


                    <div className={`${gradient_color}`}>
                        <div className="min-w-screen mx-auto ">
                            <SelfIntroduction/>
                        </div>
                    </div>

                    <Services/>

                    <section className={`panel min-h-screen ${gradient_color}`}>
                        <div
                            className=" mt-10 pt-16 text-center flex justify-center items-center text-white
                            text-4xl">
                            My Technology Stack
                        </div>
                        <div className={`mt-52 w-screen ${gradient_color}`}>
                            <Carousel images={images}/>
                        </div>
                    </section>

                    <MultipleGallery />

                    <MyFooter />
                </div>

            </div>
        </div>
    );
};

export default Home;
