const projects = [
    {title: 'Sammi', 
    description: 'A mental health support app for teachers & students',
    image: '',
link: ''},
{title: 'Furreal', 
    description: 'A pet rental service app',
    image: '',
link: ''},
{title: 'Fun to do list', 
    description: 'An aeshetic daily to do list',
    image: '',
link: ''},
]

const Projects = () => {	
    const handleClickProject = (e) => {
        console.log(e)
    }
	return (
        <>
        {/* <h1 className="text-center">Projects</h1> */}
        <main className="p-10">
            <div className="project-cards flex justify-center gap-4">
                {projects.map((project, index) => {
                    return <button className={`project-card relative h-[50vh] w-[50vh] bg-orange-400 shadow rounded flex items-end p-6 text-start text-black`} key={index} id={index} onClick={(e) => handleClickProject(e)}>
                        <div>
                            <h1 className="text-light">{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </button>
                })}
            </div>
            
        </main>
        </>
        
    )
}

export default Projects;
