'use client';

import Link from 'next/link';
import logo from '../../public/images/darkoffice_logo.jpeg';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const buttonstyle =
		'w-36 text-center p-0 text-white hover:text-white hover:bg-theme_dark_red transition-all duration-300 font-bold text-lg';

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav id="navbar" className="h-16 bg-[#0d1117] fixed w-full z-20">
			<div className="w-full h-full flex flex-wrap items-center justify-between">
				<a href="/" className="flex flex-col items-center rtl:space-x-reverse mx-4">
					<div className="flex flex-row items-end mx-4">
					<h1 className="text-3xl text-red-700 font-serif">dark offic</h1>
					<Image
						src={logo || ''}
						className="h-5 w-auto mb-1.5"
						alt="Dark Office Logo"
					/>
					</div>
					<p className="text-center text-gray-400 font-serif">
						MES - MOM - IoT - AI - RPA
					</p>
				</a>
				<button
					className="block py-4 px-8 md:hidden text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
						></path>
					</svg>
				</button>
				{isOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
						onClick={() => setIsOpen(false)}
					></div>
				)}
				<ul
					className={`fixed top-0 right-0 h-full bg-[#252525] w-full transform ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					} transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:bg-transparent md:w-auto md:transform-none flex flex-col items-center justify-center z-20 text-center`}
				>
					<div className="md:hidden fixed top-2 right-4 text-2xl">
						<button onClick={() => setIsOpen(false)}>x</button>
					</div>
					<li className="">
						<a href="/" className="flex items-end rtl:space-x-reverse">
							<h1 className="text-4xl text-red-700 font-serif lg:hidden">
								dark offic
							</h1>
							<Image
								src={logo || ''}
								className="h-6 w-auto mb-1.5 lg:hidden"
								alt="Dark Office Logo"
							/>
						</a>
					</li>
					<li className={buttonstyle}>
						<button onClick={handleLinkClick} className="h-16 text-center">
							<Link href="/">Home</Link>
						</button>
					</li>
					<li className={buttonstyle}>
						<button onClick={handleLinkClick} className="h-16 text-center">
							<a href="#about" className="">
								About
							</a>
						</button>
					</li>
					<li className={buttonstyle}>
						<button onClick={handleLinkClick} className="h-16 text-center">
							<a href="#industries">Industries</a>
						</button>
					</li>
					<li className={buttonstyle}>
						<button onClick={handleLinkClick} className="h-16 text-center">
							<a href="#expertises">Expertises</a>
						</button>
					</li>
					{/*<li className={buttonstyle}>*/}
					{/*	<button onClick={handleLinkClick} className="h-16 text-center">*/}
					{/*		<a href="#news">News & Events</a>*/}
					{/*	</button>*/}
					{/*</li>*/}
					<li className={buttonstyle}>
						<button onClick={handleLinkClick} className="h-16 text-center">
							<a href="#contact">Contact Us</a>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
