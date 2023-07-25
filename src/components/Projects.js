import sammiImage from '../assets/images/sammi-mockup.png'
import furrealImage from '../assets/images/furreal-mockup.png'
import todolistImage from '../assets/images/todolist-mockup.png'
import sammiMobileImage from '../assets/images/sammi-mobile-mockup.png'
import { FaLink, FaGithub } from 'react-icons/fa'
const projects = [
    {
        id: 1,
        title: 'Fun to do list',
        description: 'An aesthetic daily to do list',
        image: todolistImage,
        github: 'https://github.com/laurapham1/fun-todolist',
        website: 'http://www.fun-todolist.live',

        skills: ['react', 'javascript', 'gatsby'],
    },
    {
        id: 2,
        title: 'Sammi - mobile app',
        description: 'An emotion diary and social connection app',
        image: sammiMobileImage,
        github: 'https://github.com/laurapham1/BeeMindful',
        website: '',
        skills: ['react native', 'javascript', 'mobile app'],
    },
    {
        id: 3,
        title: 'Sammi',
        description: 'A mental health support app for teachers & students',
        image: sammiImage,
        github: 'https://github.com/lauranpham/Sammi',
        website: 'https://www.youtube.com/watch?v=uayJ4QoKlVw&t=330s',

        skills: ['ruby', 'javascript', 'rails'],
    },
    {
        id: 4,
        title: 'Furreal',
        description: 'A pet rental service app',
        image: furrealImage,
        github: 'https://github.com/ferdifish/furreal',
        website: '',

        skills: ['ruby', 'javascript', 'rails'],
    },
]

const Projects = () => {
    return (
        <div className="section h-fit min-h-fit p-8 md:px-16 flex flex-col gap-6" id="projects">
            <h1 className="text-center font-light text-2xl">Projects</h1>

            <div className="project-cards grid grid-cols-1 md:grid-cols-2 gap-8 h-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1128px] m-auto">
                {projects.map((project, index) => {
                    return (
                        <div className="flex items-center justify-center">
                            <div
                                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-gray-400 border-r-gray-200 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] absolute -z-10"
                                role="status"
                            ></div>
                            <button
                                className={`project-card bg-white shadow rounded-md text-start h-fit hover:bg-gray-100 transition duration-300 cursor-auto opacity-0 ease-in-out`}
                                key={index}
                                id={project.id}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title}-Mockup`}
                                    className="bg-gray-100 rounded-t-md max-w-full h-auto"
                                    onLoad={(e) => {
                                        return (e.target.parentNode.style.opacity = 1)
                                    }}
                                    loading="lazy"
                                    height="auto"
                                    width="100%"
                                />
                                <div className="relative p-6 flex flex-col gap-2">
                                    <h1 className="font-bold text-md">
                                        {project.title}
                                    </h1>
                                    <p>{project.description}</p>
                                    <div className="gap-2 flex flex-wrap">
                                        {project.skills.map((skill) => {
                                            return (
                                                <span className="bg-gray-200 p-2 py-1 text-sm shadow rounded h-fit">
                                                    {skill}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row gap-4 justify-end">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGithub className="text-gray-600 text-xl hover:text-purple-800 rounded transition-color" />
                                            </a>
                                        )}
                                        {project.website && (
                                            <a
                                                href={project.website}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaLink className="text-gray-600 text-xl hover:text-purple-800 rounded transition-color" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
