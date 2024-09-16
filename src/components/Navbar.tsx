import Link from 'next/link';
import logo from '../../public/images/darkoffice_logo.jpeg';
import Image from 'next/image';

export default function Navbar() {
	const buttonstyle = 'p-4';
	return (
		<nav id="navbar" className="m-4 relative z-20">
			<div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/home" className="flex items-center rtl:space-x-reverse">
					<h1 className="text-4xl">dark offic</h1>
					<Image src={logo} className="h-12 w-auto" alt="Dark Office Logo" />
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
