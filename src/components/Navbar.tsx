import Link from 'next/link';
import logo from '../../public/images/darkoffice_logo.jpeg';
import Image from 'next/image';

export default function Navbar() {
	const buttonstyle = 'p-4';
	return (
		<nav id="navbar" className="m-4">
			<div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/home" className="flex items-center rtl:space-x-reverse">
					<h1 className="text-3xl">dark offic</h1>
					<Image src={logo} className="h-12 w-auto" alt="Dark Office Logo" />
				</a>
				<ul className="flex flex-row gap-8">
					<li className={buttonstyle}>
						<Link href="/home">Home</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/contact">Contact</Link>
					</li>
					<li className={buttonstyle}>
						<Link href="/information">Information</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
