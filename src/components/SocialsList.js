import { FaTree, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialsList = () => {
    return (
        <div className="social-icons flex flex-row gap-2">
            <button className="hover:scale-125 ease-in-out duration-300 p-2 border rounded-[50%]">
                <a
                    href="https://www.github.com/laurapham1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub className="text-lg"/>
                </a>
            </button>
            <button className="hover:scale-125 ease-in-out duration-300 p-2 border rounded-[50%]">
                <a
                    href="https://www.linkedin.com/in/lauranpham"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="text-lg"/>
                </a>
            </button>
            <button className="hover:scale-125 ease-in-out duration-300 p-2 border rounded-[50%]">
                <a href="https://www.linktr.ee/lauranpham" target="_blank" rel="noreferrer">
                    <FaTree className="text-lg"/>
                </a>
            </button>
            <button className="hover:scale-125 ease-in-out duration-300 p-2 border rounded-[50%]">
                <a
                    href="https://www.instagram.com/lauracodes_/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram className="text-lg"/>
                </a>
            </button>
        </div>
    )
}

export default SocialsList
