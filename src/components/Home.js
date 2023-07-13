import { FaTree, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Home = () => {
    return (
        <div className="hero flex h-[85vh] items-center justify-around bg-purple-800 text-white p-8">
            <div className="hero-text flex flex-col gap-4">
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
            <div className="hero-image h-inherit"></div>
        </div>
    )
}

export default Home
