import {useState, useEffect, useCallback} from 'react'
import './App.css';
import { FaBars, FaInstagram, FaLinkedin } from "react-icons/fa";
import Projects from './components/Projects';

const navItems = [
	{title: 'Home', id: "home"},
	{title: 'About', id: "about"},
	{title: 'Projects', id: "projects", className: "bg-orange-600 text-white", contents: <Projects/>},
	{title: 'Contact', id: "contact"},
	{title: 'Reviews', id: "reviews", className: "bg-orange-600 text-white"},
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
			<div id="navbar" className='menu flex justify-between items-center p-4 sticky top-0 bg-white/75 w-full z-10'>
				<h1>LAURA PHAM</h1>
						<div className="block md:hidden"><button><FaBars/></button></div>
						<div className="gap-4 items-center hidden md:flex">
						{navItems.map((item) => {
							const isActiveNav = activeNavItem === item.id
							return (
								<span class={isActiveNav ? `before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block` : ''}>
									<button key={item.id} onClick={(e) => handleClickNavItem(e, item)} className={isActiveNav ? `relative text-white` : ""}>{item.title}</button>
								</span>
								
							)
						})}
						</div>
				</div>
			<div id="home" className="section">
				<div className='hero flex h-[95vh] items-center justify-around bg-orange-600 p-8 text-white'>
					<div className='hero-text flex flex-col gap-4'>
						<span>
							<h1 className='text-bold'>I am Laura Pham</h1>
							<p>And I'm a software engineer</p>
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
					<div key={item.id} id={item.id} className={`h-[80vh] p-4 ${item.className} section`}>
						<h1 className="text-center">{item.title}</h1>
						{item.contents}
					</div>
				)
			})}
		</main>
	);
}

export default App;
