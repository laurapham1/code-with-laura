import sammiImage from '../assets/images/sammi-mockup.png'
import furrealImage from '../assets/images/furreal-mockup.png'
import todolistImage from '../assets/images/todolist-mockup.png'
import placeholderImage from '../assets/images/mrcocktail-mockup.png'

const projects = [
    {
        title: 'Sammi',
        description: 'A mental health support app for teachers & students',
        image: sammiImage,
        link: '',
        skills: ['ruby', 'javascript', 'rails']
    },
    {
        title: 'Furreal',
        description: 'A pet rental service app',
        image: furrealImage,
        link: '',
        skills: ['ruby', 'javascript', 'rails']
    },
    {
        title: 'Fun to do list',
        description: 'An aesthetic daily to do list',
        image: todolistImage,
        link: '',
        skills: ['react', 'javascript', 'node', 'graphql']

    },
    {
        title: 'Emotion Tracker',
        description: 'An emotion tracker/diary mobile app',
        image: placeholderImage,
        link: '',
        skills: ['react native', 'javascript', 'graphql', 'node']
    },
]

const Projects = () => {
    const handleClickProject = (e) => {
        console.log(e)
    }
    return (
        <>
            {/* <h1 className="text-center">Projects</h1> */}
            <main className="p-8 h-full">
                <div className="project-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
                    {projects.map((project, index) => {
                        return (
                            <>
                                <button
                                    className={`project-card bg-white shadow rounded-md flexf flex-col justify-end items-end text-start text-black`}
                                    key={index}
                                    id={index}
                                    onClick={(e) => handleClickProject(e)}
                                >
                                    <img src={project.image} alt={`${project.title}-Mockup`} className="bg-cyan-100 rounded-t-md"/>
                                    <div className="relative p-6 flex flex-col gap-2">
                                        <h1 className="font-bold text-md">
                                            {project.title}
                                        </h1>
                                        <p>{project.description}</p>
                                        <div className="gap-2 flex">

                                        {project.skills.map((skill)=> {
                                            return <span className="bg-gray-200 p-2 py-1 text-sm shadow rounded h-fit">{skill}</span>
                                        })}
                                        
                                        </div>
                                    </div>
                                </button>
                            </>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Projects
