import { FaBars, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Home = () => {
    return (
        <div className="hero flex h-[85vh] items-center justify-around bg-rose-800 text-white p-8">
            <div className="hero-text flex flex-col gap-4">
                <div className="text-2xl font-light w-fit">
                    <div className="typewriter ">
                        <h1 className="">Hi, I'm Laura 👋</h1>
                    </div>
                </div>
                <div className="text-2xl font-light w-fit">
                    <h2 className="">Educator turned Software engineer</h2>
                </div>
                <div className="social-icons flex flex-row gap-2">
                    <button className="hover:scale-125 ease-in-out duration-300">
                        <FaInstagram />
                    </button>
                    <button className="hover:scale-125 ease-in-out duration-300">
                        <FaLinkedin />
                    </button>
                </div>
            </div>
            <div className="hero-image h-inherit"></div>
        </div>
    )
}

export default Home
