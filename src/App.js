import {useState} from 'react'
import './App.css';

const navItems = [
	{title: 'Home', id: "home"},
	{title: 'About', id: "about", className: "bg-blue-600"},
	{title: 'Projects', id: "projects", className: "bg-white-600"},
	{title: 'Contact', id: "contact", className: "bg-purple-600"},
	{title: 'Reviews', id: "reviews", className: "bg-pink-600"},
]
const App = () => {
	const [activeNavItem, setActiveNavItem] = useState("home")
	const handleClickNavItem = (e, item) => {
		e.preventDefault()
		setActiveNavItem(item.id)
		const element = document.getElementById(item.id);
		element.scrollIntoView(element);
	}
	return (
		<main>
			<div className='menu flex justify-between items-center p-4' id="home">
				<h1>code with laura</h1>
				<div id="navbar" className="flex gap-4">
					{navItems.map((item) => {
						return (
							<button onClick={(e) => handleClickNavItem(e, item)} className={activeNavItem === item.id ? 'text-bold border-b' : ''}>{item.title}</button>
						)
					})}
				</div>
			</div>
			<div className='hero flex h-[80vh] items-center justify-around bg-orange-600 p-8 text-white'>
				<div className='hero-text'>
					<h1 className='text-bold'>I am Laura Pham</h1>
					<p>And I'm a software engineer</p>
					<div className='social-icons'></div>
				</div>
				<div className='hero-image h-inherit'></div>
			</div>
			{navItems.filter((item) => item.id !== "home").map((item) => {
				return (
					<div id={item.id} className={`h-[80vh] p-4 ${item.className}`}>
						<h1 className="text-center">{item.title}</h1>
					</div>
				)
			})}
		</main>
	);
}

export default App;
