import Link from 'next/link';
import logo from '../../public/images/darkoffice_logo.jpeg';
import Image from 'next/image';

export default function Navbar() {
	const buttonstyle = 'p-4 text-white hover:text-theme_red hover:border-b-2 hover:border-theme_red transition-all duration-300 font-bold text-lg';
	return (
		<nav id="navbar" className="m-4 relative z-20">
			<div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/home" className="flex items-end rtl:space-x-reverse">
					<h1 className="text-4xl font-bold text-theme_dark_red">dark offic</h1>
					<Image src={logo} className="h-6 w-auto mb-1.5" alt="Dark Office Logo" />
				</a>
				<ul className="flex flex-row gap-8">
					<li className={buttonstyle}>
						<Link href="/">Home</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/about">About</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/industries">Industries</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/expertises">Expertises</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/news">News & Events</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/contact">Contact Us</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
