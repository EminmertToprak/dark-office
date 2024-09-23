'use client';

import Link from 'next/link';
import logo from '../../public/images/darkoffice_logo.jpeg';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const buttonstyle = 'p-4 text-white hover:text-theme_red hover:underline transition-all duration-300 font-bold text-lg';

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav id="navbar" className="m-4 relative z-20">
			<div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/home" className="flex items-end rtl:space-x-reverse">
					<h1 className="text-4xl font-bold text-theme_dark_red">dark offic</h1>
					<Image src={logo} className="h-6 w-auto mb-1.5" alt="Dark Office Logo" />
				</a>
				<button
					className="block md:hidden text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
					</svg>
				</button>
				{isOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300" onClick={() => setIsOpen(false)}></div>
				)}
				<ul className={`fixed top-0 right-0 h-full bg-[#252525] w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:gap-8 md:bg-transparent md:w-auto md:transform-none flex flex-col items-center justify-center z-20`}>
					<li className="mb-8">
						<a href="/home" className="flex items-end rtl:space-x-reverse">
							<h1 className="text-4xl font-bold text-theme_dark_red">dark offic</h1>
							<Image src={logo} className="h-6 w-auto mb-1.5" alt="Dark Office Logo" />
						</a>
					</li>
					<li className={buttonstyle}>
						<Link href="/" onClick={handleLinkClick}>Home</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/about" onClick={handleLinkClick}>About</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/industries" onClick={handleLinkClick}>Industries</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/expertises" onClick={handleLinkClick}>Expertises</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/news" onClick={handleLinkClick}>News & Events</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}