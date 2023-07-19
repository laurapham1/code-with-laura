// import image from '../assets/images/profile-photo.png'
// import linktree from '../assets/images/linktree.png'
// import intelligencebank from '../assets/images/intelligencebank.png'
// import learnershape from '../assets/images/learnershape.jpg'
// import eaglesoftware from '../assets/images/eaglesoftware.png'

const technicalSkills = [
    'javascript',
    'react',
    'node',
    'php',
    'ruby',
    'rails',
    'elixir',
    'graphql',
    'aws',
    'azure',
]
const softSkills = [
    'communication',
    'problem solving',
    'teamwork',
    'attention to detail',
]
// const workExperience = [
//     {
//         name: 'Linktree',
//         link: '',
//         image: linktree,
//     },
//     {
//         name: 'IntelligenceBank',
//         link: '',
//         image: intelligencebank,
//     },
//     {
//         name: 'Eagle Software',
//         link: '',
//         image: eaglesoftware,
//     },
//     {
//         name: 'Learnershape',
//         link: '',
//         image: learnershape,
//     },
// ]
const About = () => {
    return (
        <div className="h-fit min-h-fit p-8 md:px-16 section flex flex-col gap-6">
            <h1 className="text-center font-light text-2xl">About</h1>
            <div className="flex gap-4 flex-col lg:flex-row items-center">
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="flex-1">
                        Hello world! I'm Laura and it’s nice to meet you. 👩🏻‍💻👋🏼

<br/><br/>I am a driven and meticulous Full Stack Engineer who thrives on continuous learning and possesses a diverse skill set honed through my work at an Australian unicorn start-up, a London EdTech start-up, and within the Australian and UK education systems.

<br/><br/>My strengths lie in teamwork, effective communication, and unwavering attention to detail. These qualities enable me to spearhead projects of the highest quality and drive them to successful completion.

<br/><br/>Collaboration is where I truly shine, leveraging my interpersonal skills to foster a cohesive and productive team environment. I believe in the power of clear communication and the impact it has on project outcomes.

<br/><br/>My unwavering commitment to excellence and passion for problem-solving are the driving forces behind my work. 
<br/><br/>If you're seeking a Full Stack Engineer who thrives in dynamic environments, values teamwork, and is dedicated to delivering exceptional results, I'm here to bring your projects to new heights.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">Technical skills: </h2>
                        <div className="gap-2 flex overflow-auto py-4 flex-wrap">
                            {technicalSkills.map((skill) => {
                                return (
                                    <div className="bg-gray-200 p-2 py-1 text-sm shadow rounded w-fit capitalize">
                                        {skill}
                                    </div>
                                )
                            })}
                        </div>
                        <h2 className="font-bold">Soft skills: </h2>
                        <div className="gap-2 flex overflow-auto py-4 flex-wrap">
                            {softSkills.map((skill) => {
                                return (
                                    <div className="bg-gray-200 p-2 py-1 text-sm shadow rounded w-fit capitalize">
                                        {skill}
                                    </div>
                                )
                            })}
                        </div>
                        {/* <h2 className="font-bold">Work Experience: </h2> */}
                        {/* <div className="gap-2 flex flex-row overflow-auto py-4 overflow-auto">
                            {workExperience.map((company) => {
                                return (
                                    <img
                                        src={company.image}
                                        alt={company.name}
                                        className="h-20 md:h-28 w-fit"
                                    />
                                )
                            })}
                        </div> */}
                    </div>
                </div>
                {/* <img
                    src={image}
                    alt="Profile Photo"
                    className="rounded-lg shadow hidden md:block max-w-sm object-contain flex-0"
                /> */}
            </div>
        </div>
    )
}

export default About
