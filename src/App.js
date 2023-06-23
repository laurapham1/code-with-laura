import {useState, useEffect, useCallback} from 'react'
import './App.css';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
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
		window.addEventListener('scroll', handleScroll, { passive: true });
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
		window.scrollTo({top:newTop} )
	}
	
	return (
		<main className="">
			<div id="navbar" className='menu flex justify-between items-center p-4 sticky top-0 bg-white w-full opacity-[75%] z-10'>
				<h1>LAURA PHAM</h1>
					<div className="flex gap-4">
						{navItems.map((item) => {
							return (
								<button key={item.id} onClick={(e) => handleClickNavItem(e, item)} className={activeNavItem === item.id ? 'text-bold border-b' : ''}>{item.title}</button>
							)
						})}
					</div>
				</div>
			<div id="home" className="section">
				<div className='hero flex h-[80vh] items-center justify-around bg-orange-600 p-8 text-white'>
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
