import MusicNav from "../components/MusicNav";
import "../globals.css"
import MyFooter from "../components/MyFooter";
import {Icon} from "@iconify/react";
import {Image} from "@nextui-org/react";

const technologyColors = {
    NodeJS: 'bg-green-500',
    Express: 'bg-gray-600',
    Handlebars: 'bg-orange-500',
    HTML: 'bg-red-500',
    Bootstrap: 'bg-purple-500',
    CSS: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    jQuery: 'bg-blue-400',
    Django: 'bg-green-800',
    Jinja: 'bg-red-400',
    Python: 'bg-blue-600',
    ChartJS: 'bg-pink-500',
    SQLite: 'bg-gray-400',
    React: 'bg-blue-400',
    NPM: 'bg-red-500',
    MySQL: "bg-blue-300",
    Nginx: 'bg-green-600',
    BootStrap: 'bg-purple-700',
    TailwindCSS: 'bg-blue-400'
    // Add more technologies as needed
};

const projects = () => {

    const projects = [
        {
            title: 'MusicTop',
            description: 'Features include music rankings, personal posts, likes and comments to each posts, and playlist sharing.',
            technologies: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Nginx', 'NPM', 'AWS'],
            date: 'Mar 2024 - Now',
            image: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG436.png',
            githubLink: 'https://github.com/ILikeHotpott/MusicSite',
            liveDemo: 'https://www.music-top.com'
        },
        {
            title: 'Chatbot',
            description: 'A chatbot based on a Django server, utilizing the OpenAI GPT-4-mini API, can chat with users in real time.',
            technologies: ['Python', 'Django', 'DRF', 'HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Nginx', 'NPM'],
            date: 'July 2024',
            image: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG437.png',
            githubLink: 'https://github.com/ILikeHotpott/myChatbot',
            liveDemo: 'https://chatbot.music-top.com/'
        },
        {
            title: 'Personal Website',
            description: 'Personal website built using NextJS and TailwindCSS.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'NextJS', 'Nginx', 'NPM'],
            date: 'Sep 2024',
            image: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG439.png',
            githubLink: 'https://github.com/ILikeHotpott/portfolio',
            liveDemo: 'https://yitong.music-top.com/'
        },
        {
            title: '2048',
            description: '2048 Game built using Python.',
            technologies: ['Python'],
            date: 'Feb 2022 - Nov 2022',
            image: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG438.png',
            githubLink: 'https://github.com/ILikeHotpott/GAME2048',
            liveDemo: 'https://your-live-demo-url.com'
        },
    ];

    return (
        <div className={"bg-white"}>
            <MusicNav/>
            <div className="bg-gradient-to-tr from-orange-300 via-orange-400 to-blue-500 py-12">
                <h2 className="text-4xl text-center text-white font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-amber-50 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg">
                            <Image width={500} height={309} src={project.image} alt={project.title}
                                   className="w-full h-40 object-cover mb-4"
                                   radius="lg"
                                   isZoomed
                            />
                            <h3 className="text-2xl text-gray-600 font-semibold">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}
                                          className={`px-3 py-1 text-sm rounded ${technologyColors[tech] || 'bg-gray-900'} text-white`}>
                                      {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-500 mt-4">{project.description}</p>
                            <p className="text-teal-400 mt-2">{project.date}</p>
                            <div className="flex justify-start space-x-4 mt-4">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-gray-400" icon="octicon:mark-github-16"
                                          width={28}/>
                                </a>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white text-2xl hover:text-gray-400" icon="mdi:web"
                                          width={30}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <MyFooter/>
        </div>
    )
}

export default projects;
