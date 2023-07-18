import profileImage from '../assets/images/profile.png'
import SocialsList from './SocialsList'

const Home = () => {
    return (
        <div className="hero grid grid-cols-1 md:grid-cols-2 h-fit min-h-fit items-center justify-around bg-purple-800 text-white pt-[60px]">
            <div className="hero-text flex flex-col gap-4 p-8 ml-0 md:ml-[25%]">
                <div className="text-3xl md:text-5xl font-bold w-fit">
                    <div className="typewriter ">
                        <h1 className="">Hi, I'm Laura 👋</h1>
                    </div>
                </div>
                <div className="text-xl md:text-3xl font-light w-fit">
                    <h2 className="">Educator turned Software engineer</h2>
                </div>
                <SocialsList />
            </div>
            <div className="hero-image">
                <img src={profileImage} alt={'profile'} className="" />
            </div>
        </div>
    )
}

export default Home
