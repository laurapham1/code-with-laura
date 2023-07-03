import image from '../assets/images/profile-photo.png'

const technicalSkills = [
    'javascript',
    'react',
    'elixir',
    'node',
    'ruby',
    'rails',
    'php',
    'graphql',
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
            <h1 className="text-center font-bold text-xl">About</h1>
            <div className="flex gap-4">
                <div className="flex flex-col gap-3">
                    <div>
                        <p className="flex-1">
                            Hello world! I'm Laura, a driven and meticulous Full
                            Stack Engineer.
                            <br />
                            <br /> With a diverse skill set and experiences at
                            esteemed organizations, including an Australian
                            unicorn start-up, a London EdTech start-up, and
                            within the Australian and UK education systems, I
                            bring a wealth of expertise to the table.
                            <br />
                            <br />
                            My forte lies in teamwork, effective communication,
                            and unwavering attention to detail, ensuring
                            high-quality project delivery. As a quick learner, I
                            continuously adapt to new challenges.
                            <br />
                            <br />
                            If you're seeking a dedicated professional who
                            excels in collaboration and possesses a keen eye for
                            detail, let's connect and create exceptional
                            projects together.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">Technical skills: </h2>
                        <div className="gap-4 flex overflow-auto py-4 flex-wrap">
                            {technicalSkills.map((skill) => {
                                return (
                                    <div className="bg-gray-200 p-2 py-1 text-sm shadow rounded w-fit">
                                        {skill}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">Soft skills: </h2>
                        <div className="gap-4 flex overflow-auto py-4 flex-wrap">
                            {softSkills.map((skill) => {
                                return (
                                    <div className="bg-gray-200 p-2 py-1 text-sm shadow rounded w-fit">
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
