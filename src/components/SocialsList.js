import { FaTree, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialsList = () => {
    return (
        <div className="social-icons flex flex-row gap-2">
            <button className="hover:scale-125 ease-in-out duration-300">
                <a
                    href="https://www.github.com/laurapham1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
            </button>
            <button className="hover:scale-125 ease-in-out duration-300">
                <a
                    href="https://www.linkedin.com/in/lauranpham"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
            </button>
            <button className="hover:scale-125 ease-in-out duration-300">
                <a href="https://www.linktr.ee/codewithlaura" target="_blank" rel="noreferrer">
                    <FaTree />
                </a>
            </button>
            <button className="hover:scale-125 ease-in-out duration-300">
                <a
                    href="https://www.instagram.com/lauracodes_/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
            </button>
        </div>
    )
}

export default SocialsList
