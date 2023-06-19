import './App.css';
function App() {
	return (
		<main>
			<div className='menu flex justify-between items-center p-4'>
				<h1>code with laura</h1>
				<div></div>
			</div>
			<div className='hero flex h-[80vh] items-center justify-around bg-orange-600 p-8 text-white'>
				<div className='hero-text'>
					<h1 className='text-bold'>I am Laura Pham</h1>
					<p>And I'm a software engineer</p>
					<div className='social-icons'></div>
				</div>
				<div className='hero-image h-inherit'></div>
			</div>
			<div className='section-projects h-[80vh] bg-blue-600'></div>
			<div className='section-about h-[80vh] bg-white-600'></div>
			<div className='section-reviews h-[80vh] bg-purple-600'></div>
			<div className='section-contact h-[80vh] bg-pink-600'></div>
		</main>
	);
}

export default App;
