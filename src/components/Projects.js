import sammiImage from '../assets/images/sammi-mockup.png'
import furrealImage from '../assets/images/furreal-mockup.png'
import todolistImage from '../assets/images/todolist-mockup.png'
import sammiMobileImage from '../assets/images/sammi-mobile-mockup.png'

const projects = [
    {
        id: 1,
        title: 'Sammi',
        description: 'A mental health support app for teachers & students',
        image: sammiImage,
        link: '',
        skills: ['ruby', 'javascript', 'rails'],
    },
    {
        id: 2,
        title: 'Furreal',
        description: 'A pet rental service app',
        image: furrealImage,
        link: '',
        skills: ['ruby', 'javascript', 'rails'],
    },
    {
        id: 3,
        title: 'Fun to do list',
        description: 'An aesthetic daily to do list',
        image: todolistImage,
        link: '',
        skills: ['react', 'javascript', 'node', 'graphql'],
    },
    {
        id: 4,
        title: 'Sammi - mobile app',
        description: 'An emotion diary and social connection app',
        image: sammiMobileImage,
        link: '',
        skills: ['react native', 'javascript', 'mobile app'],
    },
]

const Projects = () => {
    const handleClickProject = (e) => {
        console.log(e)
        // open modal of project
        const modalElement = document.getElementById(
            `project-${e.currentTarget.id}-modal`
        )
        modalElement.classList.remove('hidden')
    }

    const closeProjectModal = (e) => {
        // const modalElement = document.getElementById(`project-${e.currentTarget.id}-modal`)
        e.currentTarget.classList.add('hidden')
    }
    return (
        <div className="h-fit min-h-fit p-8 md:px-16 section flex flex-col gap-6">
            <h1 className="text-center font-light text-2xl">Projects</h1>

            <div className="project-cards grid grid-cols-1 md:grid-cols-2 gap-8 h-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1128px] m-auto">
                {projects.map((project, index) => {
                    return (
                        <>
                            <button
                                className={`project-card bg-white shadow rounded-md text-start h-fit hover:bg-gray-100 transition-color duration-300 cursor-auto`}
                                key={index}
                                id={project.id}
                                onClick={(e) => handleClickProject(e)}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title}-Mockup`}
                                    className="bg-gray-100 rounded-t-md opacity-0 transition-opacity duration-[2000ms] ease-in-out"
                                    onLoad={(e) => e.target.style.opacity = 1}
                                    loading="lazy"
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
                            <div
                                className="project-modal hidden fixed w-full h-full bg-black/75 top-0 left-0 z-10 flex flex-col justify-center items-center"
                                id={`project-${project.id}-modal`}
                                onClick={(e) => closeProjectModal(e)}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title}-Mockup`}
                                    className="bg-cyan-100 block relative md:max-w-[80vw] md:max-h-[80vh]"
                                />
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
