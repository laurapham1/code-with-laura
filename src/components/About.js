import image from '../assets/images/profile-photo.png'
const About = () => {
    
    return (
       <div className="gap-4 flex">
        <p>
        Hello, world! I'm Laura, a driven and meticulous Full Stack Engineer. 
        <br/><br/> With a diverse skill set and experiences at esteemed organizations, including an Australian unicorn start-up, a London EdTech start-up, and within the Australian and UK education systems, I bring a wealth of expertise to the table. 
        <br/><br/>My forte lies in teamwork, effective communication, and unwavering attention to detail, ensuring high-quality project delivery. As a quick learner, I continuously adapt to new challenges. 
        <br/><br/>If you're seeking a dedicated professional who excels in collaboration and possesses a keen eye for detail, let's connect and create exceptional projects together.
        </p>
        <img src={image} alt="Profile Photo" className="rounded-md shadow hidden md:block max-w-md "/>
       </div>
    )
}

export default About
