import sammiImage from '../assets/images/sammi-mockup.png'
import furrealImage from '../assets/images/furreal-mockup.png'
import todolistImage from '../assets/images/todolist-mockup.png'
import beeMindImage from '../assets/images/beemind-mockup.png'

const projects = [
    {
        title: 'Sammi',
        description: 'A mental health support app for teachers & students',
        image: sammiImage,
        link: '',
        skills: ['ruby', 'javascript', 'rails'],
    },
    {
        title: 'Furreal',
        description: 'A pet rental service app',
        image: furrealImage,
        link: '',
        skills: ['ruby', 'javascript', 'rails'],
    },
    {
        title: 'Fun to do list',
        description: 'An aesthetic daily to do list',
        image: todolistImage,
        link: '',
        skills: ['react', 'javascript', 'node', 'graphql'],
    },
    {
        title: 'Bee Mind',
        description: 'An emotion diary and social connection app',
        image: beeMindImage,
        link: '',
        skills: ['react native', 'javascript', 'mobile app'],
    },
]

const Projects = () => {
    const handleClickProject = (e) => {
        console.log(e)
    }
    return (
        <>
            <h1 className="text-center font-light text-2xl">Projects</h1>

            <div className="project-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
                {projects.map((project, index) => {
                    return (
                        <>
                            <button
                                className={`project-card bg-white shadow rounded-md text-start h-fit hover:bg-gray-100 transition-color duration-300 cursor-auto`}
                                key={index}
                                id={index}
                                onClick={(e) => handleClickProject(e)}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title}-Mockup`}
                                    className="bg-cyan-100 rounded-t-md"
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
                                </div>
                            </button>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Projects
