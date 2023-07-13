import image from '../assets/images/profile-photo.png'

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
    'azure'
]
const softSkills = [
    'communication',
    'problem solving',
    'teamwork',
    'attention to detail',
]
const About = () => {
    return (
        <>
            <h1 className="text-center font-light text-2xl">About</h1>
            <div className="flex gap-4 flex-col lg:flex-row items-center">
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="flex-1">
                            Hello world! I'm Laura, a driven and meticulous <strong>Full
                            Stack/Front-end Engineer</strong>.
                            <br />
                            <br /> With a diverse skill set and experiences at
                            esteemed organizations, including an Australian
                            unicorn start-up, a London EdTech start-up, and
                            within the Australian and UK education systems, I
                            bring a wealth of expertise to the table.
                            <br />
                            <br />
                            My forte lies in <strong>teamwork</strong>, <strong>effective communication</strong>,
                            and unwavering <strong>attention to detail</strong>, ensuring
                            high-quality project delivery. As a quick learner, I
                            continuously adapt to new challenges.
                            <br />
                            <br />
                            If you're seeking a dedicated professional who
                            excels in <strong>collaboration</strong> and possesses a keen eye for
                            detail, let's connect and create exceptional
                            projects together.
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
                    </div>
                </div>
                <img
                    src={image}
                    alt="Profile Photo"
                    className="rounded-lg shadow hidden md:block max-w-sm object-contain flex-0"
                />
            </div>
        </>
    )
}

export default About
