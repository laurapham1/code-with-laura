import {useState, useEffect} from 'react'
import './App.css';

const navItems = [
	{title: 'Home', id: "home"},
	{title: 'About', id: "about", className: "bg-blue-600"},
	{title: 'Projects', id: "projects", className: "bg-white-600"},
	{title: 'Contact', id: "contact", className: "bg-purple-600"},
	{title: 'Reviews', id: "reviews", className: "bg-pink-600"},
]
const App = () => {
	const [activeNavItem, setActiveNavItem] = useState('home')

	const handleScroll = () => {
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
	};

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
		<main>
			<div id="navbar" className='menu flex justify-between items-center p-4 sticky top-0 bg-white w-full opacity-[75%]'>
				<h1>code with laura</h1>
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
					<div className='hero-text'>
						<h1 className='text-bold'>I am Laura Pham</h1>
						<p>And I'm a software engineer</p>
						<div className='social-icons'></div>
					</div>
					<div className='hero-image h-inherit'></div>
				</div>
			</div>
			{navItems.filter((item) => item.id !== "home").map((item) => {
				return (
					<div key={item.id} id={item.id} className={`h-[80vh] p-4 ${item.className} section`}>
						<h1 className="text-center">{item.title}</h1>
					</div>
				)
			})}
		</main>
	);
}

export default App;
