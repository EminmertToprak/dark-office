import Image from 'next/image';
import Link from 'next/link';
import React from "react";

interface HeaderProps {
	title: string;
	subtitle?: string;
	backgroundImage?: string;
	backgroundVideo?: string;
	alt?: string;
	height?: string;
	buttons?: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({
										   title,
										   subtitle,
										   backgroundImage,
										   backgroundVideo,
										   alt,
										   height = 'h-[60vh]',
										   buttons = [],
									   }) => {
	return (
		<header className={`relative ${height} flex items-center justify-center text-white mt-10`}>
			<div className="absolute inset-0 overflow-hidden">
				{backgroundVideo ? (
					<>
						<video
							autoPlay
							loop
							muted
							playsInline
							className="object-cover w-full h-full inset-0"
						>
							<source src={backgroundVideo} type="video/mp4"/>
							Your browser does not support the video tag.
						</video>
						<div className="absolute inset-0 bg-opacity-gradient"/>
					</>
				) : backgroundImage ? (
					<Image
						src={backgroundImage}
						alt={alt || 'Header background'}
						className="object-cover"
						priority
						fill
					/>
				) : (
					<div className="w-full h-full bg-gray-800"/>
				)}
			</div>
			<div className="relative z-10 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
				{subtitle && <p className="text-xl md:text-2xl mb-6">{subtitle}</p>}
				<div className="flex justify-center space-x-4">
					{buttons.map((button, index) => (
						<Link
							key={index}
							href={button.href}
							className="bg-theme_red hover:bg-theme_dark_red text-white font-bold py-2 px-4 rounded"
						>
							{button.label}
						</Link>
					))}
				</div>
			</div>
		</header>

	);
};

export default Header;