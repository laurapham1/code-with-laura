import { useState } from 'react'
import { FaEnvelope, FaUserAlt } from 'react-icons/fa'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
    }

    return (
        <>
            <h1 className="text-center font-bold text-lg text-white">
                Contact
            </h1>
            <div className="w-full md:w-[60vw] lg:w-[40vw] m-auto py-10">
                <h2 className="text-4xl mb-6 text-white tracking-wide font-light">
                    Love to hear from you,
                    <br />
                    Get in touch 👋
                </h2>
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-white">
                                Your name
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                                    <FaUserAlt className="w-4 h-4" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="rounded p-1 px-2 shadow text-gray-700 pl-10 w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-white">
                                Your email
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                                    <FaEnvelope className="w-4 h-4" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded p-1 px-2 shadow text-gray-700 pl-10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 w-full gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-white">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="rounded p-1 px-2 shadow text-gray-700"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="text-white bg-gray-700 hover:bg-gray-600 transition-background duration-300 shadow w-full rounded p-2"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
