import {useState, useEffect, useCallback} from 'react'
import './App.css';
import { FaBars, FaInstagram, FaLinkedin } from "react-icons/fa";
import Projects from './components/Projects';

const navItems = [
	{title: 'Home', id: "home"},
	{title: 'About', id: "about", contents: <p>Bringing keen attention to user experience to engineering</p>},
	{title: 'Projects', id: "projects", className: "bg-cyan-600 text-white", contents: <Projects/>},
	{title: 'Reviews', id: "reviews"},
	{title: 'Contact', id: "contact", className: "bg-cyan-600 text-white"},
]
const App = () => {
	const [activeNavItem, setActiveNavItem] = useState('home')

	const handleScroll = useCallback(() => {
		const activeNavPosition = document.getElementById(activeNavItem).getBoundingClientRect()		
		if (activeNavPosition.height - Math.abs(activeNavPosition.top) < activeNavPosition.height/2 || activeNavPosition.height - Math.abs(activeNavPosition.bottom) < activeNavPosition.height/2) {
			const sectionElements = document.querySelectorAll('.section')
			const newActiveElement = Array.from(sectionElements).find((element) => {
				const elementPosition = element.getBoundingClientRect()
				return elementPosition.height - Math.abs(elementPosition.top) > elementPosition.height/2
			})
			if (newActiveElement?.id) {
				setActiveNavItem(newActiveElement?.id)
			}
		}
	}, [activeNavItem]);

	useEffect(() => {
		window.addEventListener('scrollend', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);


	const handleClickNavItem = (e, item) => {
		e.preventDefault()
		setActiveNavItem(item.id)
		const element = document.getElementById(item.id);
		const navElement = document.getElementById('navbar')
		const newTop = window.scrollY + element.getBoundingClientRect().top - navElement.getBoundingClientRect().height 
		window.scrollTo({top:newTop, behavior: 'smooth'} )
	}
	
	return (
		<main className="">
			<div id="navbar" className='menu flex justify-between items-center p-4 fixed top-0 bg-white/75 z-10 rounded-xl m-4 w-[-webkit-fill-available]'>
				<h1 className="font-bold tracking-tight">LAURA PHAM</h1>
						<div className="block md:hidden"><button><FaBars/></button></div>
						<div className="gap-4 items-center hidden md:flex font-light">
						{navItems.map((item) => {
							const isActiveNav = activeNavItem === item.id
							return (
								<span class={isActiveNav ? `before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-600 relative inline-block` : ''}>
									<button key={item.id} onClick={(e) => handleClickNavItem(e, item)} className={isActiveNav ? `relative text-white` : ""}>{item.title}</button>
								</span>
								
							)
						})}
						</div>
				</div>
			<div id="home" className="section">
				<div className='hero flex h-[85vh] items-center justify-around bg-cyan-600 p-8 text-white'>
					<div className='hero-text flex flex-col gap-4'>
						<span className="text-xl">
							<h1 className=''>Hi, I'm Laura 👋</h1>
							<p>Educator turned Software engineer</p>
							<p>Blending a keen user focus into engineering</p>
						</span>
						<div className='social-icons flex flex-row gap-2'>
							<button className="hover:scale-125 ease-in-out duration-300"><FaInstagram/></button>
							<button className="hover:scale-125 ease-in-out duration-300"><FaLinkedin/></button>
							
						</div>
					</div>
					<div className='hero-image h-inherit'></div>
				</div>
			</div>
			{navItems.filter((item) => item.id !== "home").map((item) => {
				return (
					<div key={item.id} id={item.id} className={`h-[85vh] p-4 ${item.className} section`}>
						<h1 className="text-center font-light tracking-tight text-lg">{item.title}</h1>
						{item.contents}
					</div>
				)
			})}
		</main>
	);
}

export default App;
