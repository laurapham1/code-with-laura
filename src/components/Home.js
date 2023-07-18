import { FaTree, FaInstagram, FaLinkedin } from 'react-icons/fa'
import profileImage from '../assets/images/profile.png'

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
                <div className="social-icons flex flex-row gap-2">
                    <button className="hover:scale-125 ease-in-out duration-300">
                        <a href="https://www.instagram.com/lauracodes_/" target="_blank">
                        <FaInstagram />
                        </a>
                    </button>
                    <button className="hover:scale-125 ease-in-out duration-300">
                    <a href="https://www.linkedin.com/in/lauranpham" target="_blank">

                        <FaLinkedin />
                        </a>

                    </button>
                    <button className="hover:scale-125 ease-in-out duration-300">
                        <a href="https://www.linktr.ee/codewithlaura" target="_blank">
                        <FaTree />
                        </a>
                    </button>
                </div>
            </div>
            <div className="hero-image h-inherit flex items-end h-full">
            <img
                                    src={profileImage}
                                    alt={`Profile-image`}
                                    className=""
                                />
            </div>
        </div>
    )
}

export default Home
