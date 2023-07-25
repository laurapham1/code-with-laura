import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { FaBars } from 'react-icons/fa'
import Home from './components/Home'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const navItems = [
    { title: 'Home', id: 'home', contents: <Home /> },
    {
        title: 'Projects',
        id: 'projects',
        contents: <Projects />,
    },
    {
        title: 'Recommendations',
        id: 'recommendations',
        contents: <Recommendations />,
    },
    {
        title: 'About',
        id: 'about',
        contents: <About />,
    },
    {
        title: 'Contact',
        id: 'contact',
        contents: <Contact />,
    },
]

const renderedNavItems = (navItems, activeNavItem, handleClickNavItem) => {
    return navItems.map((item) => {
        const isActiveNav = activeNavItem === item.id
        return (
            <button
                key={item.id}
                data-id={item.id}
                onClick={(e) => handleClickNavItem(e)}
                className={`p-1 md:p-2 md:py-4 w-full ${
                    isActiveNav
                        ? `relative bg-purple-700/75 text-white rounded md:rounded-none`
                        : ''
                }`}
            >
                {item.title}
            </button>
        )
    })
}

const App = () => {
    const [activeNavItem, setActiveNavItem] = useState('home')
    const [isSubnavOpen, setIsSubnavOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loader = document.getElementById('loader')
        loader.style.opacity = 0
        setIsLoading(false)
    }, [])

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

    const handleClickNavItem = (e) => {
        e.preventDefault()
        setActiveNavItem(e.target.dataset.id)
        setIsSubnavOpen(false)
        const element = document.getElementById(e.target.dataset.id)
        const navElement = document.getElementById('navbar')
        const newTop =
            window.scrollY +
            element.getBoundingClientRect().top -
            navElement.getBoundingClientRect().bottom
        window.scrollTo({ top: newTop, behavior: 'smooth' })
    }

    if (isLoading) {
        return (
            <div
                className="h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-4 opacity-1 transition-opacity duration-[2000ms] ease-in-out z-20 bg-white fixed"
                id="loader"
            >
                <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-purple-700 border-r-gray-200 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                ></div>
            </div>
        )
    }
    return (
        <main>
            <div
                className="menu fixed top-0 bg-white/95 z-10 rounded w-[-webkit-fill-available] shadow m-2 p-4 pb-0 md:py-0"
                onMouseLeave={() => setIsSubnavOpen(false)}
            >
                <div
                    className="flex justify-between items-center pb-4 md:pb-0"
                    id="navbar"
                >
                    <button
                        onClick={(e) => handleClickNavItem(e)}
                        data-id="home"
                    >
                        <h1
                            data-id="home"
                            className="font-bold tracking-tight text-xl hover:underline transition duration-300"
                        >
                            LAURA PHAM
                        </h1>
                    </button>
                    <div
                        className="block md:hidden"
                        onMouseEnter={() => setIsSubnavOpen(true)}
                        onClick={() => setIsSubnavOpen(!isSubnavOpen)}
                    >
                        <button>
                            <FaBars />
                        </button>
                    </div>
                    <div className=" items-center md:flex hidden">
                        {renderedNavItems(
                            navItems,
                            activeNavItem,
                            handleClickNavItem
                        )}
                    </div>
                </div>
                <div
                    className={`transition-all ease-in-out duration-300 overflow-hidden box-border flex items-center flex-col md:hidden justify-center w-full ${
                        isSubnavOpen ? ' h-[200px] border-t' : 'h-0'
                    }`}
                >
                    {renderedNavItems(
                        navItems,
                        activeNavItem,
                        handleClickNavItem
                    )}
                </div>
            </div>

            {navItems.map((item) => {
                return (
                    <div key={item.id}>
                        {item.contents}
                    </div>
                )
            })}
            <Footer />
        </main>
    )
}

export default App
