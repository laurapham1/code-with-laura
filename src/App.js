import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { FaBars, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Projects from './components/Projects'
import About from './components/About'

const navItems = [
    { title: 'Home', id: 'home' },
    {
        title: 'Projects',
        id: 'projects',
        contents: <Projects />,
    },
    { title: 'Recommendations', id: 'recommendations', className: 'bg-sky-100',},
    {
        title: 'About',
        id: 'about',
        contents: <About/>,
    },
    { title: 'Contact', id: 'contact', className: 'bg-sky-100' },
]

const renderedNavItems = (navItems, activeNavItem, handleClickNavItem) =>{
    return (
        navItems.map((item) => {
            const isActiveNav = activeNavItem === item.id
            return (
                <span
                    class={
                        isActiveNav
                            ? `before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-100 relative`
                            : ''
                    }
                >
                    <button
                        key={item.id}
                        onClick={(e) => handleClickNavItem(e, item)}
                        className={
                            isActiveNav ? `relative` : ''
                        }
                    >
                        {item.title}
                    </button>
                </span>
            )
        })
    )
}

const App = () => {
    const [activeNavItem, setActiveNavItem] = useState('home')
    const [isSubnavOpen, setIsSubnavOpen] = useState(false)
    console.log({isSubnavOpen})

    const handleScroll = useCallback(() => {
        const activeNavPosition = document
            .getElementById(activeNavItem)
            .getBoundingClientRect()
        if (
            activeNavPosition.height - Math.abs(activeNavPosition.top) <
                activeNavPosition.height / 2 ||
            activeNavPosition.height - Math.abs(activeNavPosition.bottom) <
                activeNavPosition.height / 2
        ) {
            const sectionElements = document.querySelectorAll('.section')
            const newActiveElement = Array.from(sectionElements).find(
                (element) => {
                    const elementPosition = element.getBoundingClientRect()
                    return (
                        elementPosition.height - Math.abs(elementPosition.top) >
                        elementPosition.height / 2
                    )
                }
            )
            if (newActiveElement?.id) {
                setActiveNavItem(newActiveElement?.id)
            }
        }
    }, [activeNavItem])

    useEffect(() => {
        window.addEventListener('scrollend', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    const handleClickNavItem = (e, item) => {
        e.preventDefault()
        setActiveNavItem(item.id)
        setIsSubnavOpen(false)
        const element = document.getElementById(item.id)
        const navElement = document.getElementById('navbar')
        const newTop =
            window.scrollY +
            element.getBoundingClientRect().top -
            navElement.getBoundingClientRect().bottom
        window.scrollTo({ top: newTop, behavior: 'smooth' })
    }

    return (
        <main className="">
            <div
                className="menu fixed top-0 bg-white/95 z-10 rounded-md w-[-webkit-fill-available] shadow"
            >
                <div className="flex justify-between items-center p-4 m-2" id="navbar">
                <h1 className="font-bold tracking-tight">LAURA PHAM</h1>
                <div className="block md:hidden" onClick={() => setIsSubnavOpen(!isSubnavOpen)}>
                    <button>
                        <FaBars />
                    </button>
                </div>
                <div className='gap-4 items-center md:flex hidden'>
                    {renderedNavItems(navItems, activeNavItem, handleClickNavItem)}
                </div>
                </div>
                <div className={`transition-all ease-in-out duration-300 overflow-hidden box-border flex gap-4 items-center flex-col border-t md:hidden justify-center ${isSubnavOpen ? ' h-[220px]' : 'h-0'}`}>
                    {renderedNavItems(navItems, activeNavItem, handleClickNavItem)}
                </div>
            </div>
            <div id="home" className="section">
                <div className="hero flex h-[85vh] items-center justify-around bg-sky-100 p-8">
                    <div className="hero-text flex flex-col gap-4">
                        <span className="text-xl font-light">
                            <h1 className="">Hi, I'm Laura 👋</h1>
                            <p>Educator turned Software engineer</p>
                        </span>
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
            </div>
            {navItems
                .filter((item) => item.id !== 'home')
                .map((item) => {
                    return (
                        <div
                            key={item.id}
                            id={item.id}
                            className={`min-h-[85vh] p-8 ${item.className} section`}
                        >
                            <h1 className="text-center font-light text-xl">
                                {item.title}
                            </h1>
                            {item.contents}
                        </div>
                    )
                })}
        </main>
    )
}

export default App
