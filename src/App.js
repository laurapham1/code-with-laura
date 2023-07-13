import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { FaBars } from 'react-icons/fa'
import Home from './components/Home'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import About from './components/About'
import Contact from './components/Contact'

const navItems = [
    { title: 'Home', id: 'home', contents: <Home /> },
    {
        title: 'Projects',
        id: 'projects',
        className: 'h-fit min-h-fit p-8 md:px-16',
        contents: <Projects />,
    },
    {
        title: 'Recommendations',
        id: 'recommendations',
        className: 'bg-rose-800 text-white min-h-fit h-fit p-8 md:px-16',
        contents: <Recommendations />,
    },
    {
        title: 'About',
        id: 'about',
        className: 'h-fit min-h-fit p-8 md:px-16',
        contents: <About />,
    },
    {
        title: 'Contact',
        id: 'contact',
        className: 'bg-gray-100 min-h-fit h-fit p-8 md:px-16',
        contents: <Contact/>
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
                    isActiveNav ? `relative bg-rose-700/75 text-white rounded md:rounded-none` : ''
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
    console.log({ isSubnavOpen })

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

    return (
        <main className="">
            <div
                className="menu fixed top-0 bg-white/95 z-10 rounded w-[-webkit-fill-available] shadow m-2 p-4 pb-0 md:py-0"
                onMouseLeave={() => setIsSubnavOpen(false)}
            >
                <div className="flex justify-between items-center pb-4 md:pb-0" id="navbar">
                    <button
                        onClick={(e) => handleClickNavItem(e)}
                        data-id="home"
                    >
                        <h1 data-id="home" className="font-bold tracking-tight text-xl hover:underline transition duration-300">
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
                    className={`transition-all ease-in-out duration-300 overflow-hidden box-border border-t flex items-center flex-col md:hidden justify-center w-full ${
                        isSubnavOpen ? ' h-[200px]' : 'h-0'
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
                    <div
                        key={item.id}
                        id={item.id}
                        className={`section flex flex-col gap-6 ${item.className}`}
                    >
                        {item.contents}
                    </div>
                )
            })}
        </main>
    )
}

export default App
