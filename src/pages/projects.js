import MusicNav from "../components/MusicNav";
import "../globals.css"
import MyFooter from "../components/MyFooter";
import {Icon} from "@iconify/react";
import {Image, Button} from "@nextui-org/react";
import Link from "next/link";

const ProjectsPage = () => {

    const projectsData = [
        {
            title: 'MusicTop',
            description: 'Features include music rankings, personal posts, likes and comments to each posts, and playlist sharing.',
            technologies: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Nginx', 'NPM', 'AWS'],
            date: 'Mar 2024 - Present',
            image: '/projects/WechatIMG436.png',
            githubLink: 'https://github.com/ILikeHotpott/MusicSite',
            liveDemo: 'https://www.music-top.com'
        },
        {
            title: 'Chatbot',
            description: 'A chatbot based on a Django server, utilizing the OpenAI GPT-4-mini API, can chat with users in real time.',
            technologies: ['Python', 'Django', 'DRF', 'HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Nginx', 'NPM'],
            date: 'July 2024',
            image: '/projects/WechatIMG437.png',
            githubLink: 'https://github.com/ILikeHotpott/myChatbot',
            liveDemo: 'https://chatbot.music-top.com/'
        },
        {
            title: 'Personal Website',
            description: 'Personal website built using NextJS and TailwindCSS, showcasing skills and projects.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'NextJS', 'Nginx', 'NPM'],
            date: 'Sep 2024',
            image: '/projects/personal.png',
            githubLink: 'https://github.com/ILikeHotpott/portfolio',
            liveDemo: 'https://yitong.chattious.com/'
        },
        {
            title: '2048 Game',
            description: 'Classic 2048 Game built using Python, demonstrating fundamental programming logic.',
            technologies: ['Python'],
            date: 'Feb 2022 - Nov 2022',
            image: '/projects/WechatIMG438.png',
            githubLink: 'https://github.com/ILikeHotpott/GAME2048',
            liveDemo: null
        },
    ];

    return (
        <div className={"bg-slate-900 text-slate-200 min-h-screen selection:bg-sky-500 selection:text-white"}>
            <div className={"sticky top-0 z-50 backdrop-blur-md bg-slate-900/70"}>
                <MusicNav/>
            </div>
            <div className="py-16 md:py-24">
                <header className="mb-12 md:mb-16 text-center">
                    <div className="py-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 inline-block">
                        My Projects
                    </div>
                    <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                        A collection of my technical endeavors and creative explorations.
                    </p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl xl:max-w-6xl mx-auto px-6 md:px-8">
                    {projectsData.map((project, index) => (
                        <div key={index}
                             className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-2xl shadow-slate-950/50 hover:shadow-sky-500/30 transition-all duration-300 flex flex-col"
                        >
                            <Image
                                width={500}
                                height={300}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 sm:h-56 md:h-60 object-cover mb-5 rounded-lg border-2 border-slate-700 group-hover:border-sky-500 transition-colors duration-300"
                                isZoomed
                                removeWrapper={false}
                            />
                            <div className="flex-grow">
                                <h3 className="text-2xl lg:text-3xl text-sky-400 font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-slate-400 mb-3">{project.date}</p>
                                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex}
                                              className={"px-3 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30"}>
                                          {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-4 text-base">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex justify-start space-x-4 mt-auto pt-4 border-t border-slate-700/50">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                   className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center space-x-2 group">
                                    <Icon icon="octicon:mark-github-16" width={24} height={24}/>
                                    <span className="group-hover:underline">GitHub</span>
                                </a>
                                {project.liveDemo && (
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                                       className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center space-x-2 group">
                                        <Icon icon="mdi:web" width={24} height={24}/>
                                        <span className="group-hover:underline">Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MyFooter/>
        </div>
    )
}

export default ProjectsPage;
