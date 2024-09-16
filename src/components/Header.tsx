import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HeaderProps {
	title: string;
	subtitle: string;
	backgroundImage: string;
	backgroundVideo?: string;
}

export default function Header({
	title,
	subtitle,
	backgroundImage,
	backgroundVideo,
}: HeaderProps) {
	const [isVideo, setIsVideo] = useState(false);

	useEffect(() => {
		if (backgroundVideo) {
			setIsVideo(true);
		}
	}, [backgroundVideo]);

	return (
		<header className="relative w-full h-[30vh] flex flex-col justify-center items-center text-center bg-cover bg-center z-10">
			{isVideo && backgroundVideo ? (
				<video
					className="absolute inset-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
				>
					<source src={backgroundVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			) : (
				<Image
					src={backgroundImage}
					alt="Header background"
					layout="fill"
					className="object-cover"
					priority
				/>
			)}

			<div className="relative z-10 text-white p-8">
				<h1 className="text-4xl font-bold">{title}</h1>
				<p className="text-xl mt-4">{subtitle}</p>
			</div>

			{/* darkening the background */}
			<div className="absolute inset-0 bg-black opacity-50"></div>
		</header>
	);
}
