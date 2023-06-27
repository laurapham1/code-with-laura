const projects = [
    {
        title: 'Sammi',
        description: 'A mental health support app for teachers & students',
        image: '',
        link: '',
    },
    {
        title: 'Furreal',
        description: 'A pet rental service app',
        image: '',
        link: '',
    },
    {
        title: 'Fun to do list',
        description: 'An aeshetic daily to do list',
        image: '',
        link: '',
    },
    {
        title: 'Emotion Tracker',
        description: 'An emotion tracker/diary mobile app',
        image: '',
        link: '',
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
                                    className={`project-card bg-white shadow rounded-md flex items-end text-start text-black`}
                                    key={index}
                                    id={index}
                                    onClick={(e) => handleClickProject(e)}
                                >
                                    <div className="relative p-6">
                                        <h1 className="text-light">
                                            {project.title}
                                        </h1>
                                        <p>{project.description}</p>
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
