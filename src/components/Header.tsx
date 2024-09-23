import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Button {
	label: string;
	link: string;
}

interface HeaderProps {
	title: string;
	subtitle: string;
	backgroundImage?: string;
	backgroundVideo?: string;
	alt?: string;
	buttons?: Button[];
}

export default function Header({
	title,
	subtitle,
	backgroundImage,
	backgroundVideo,
	buttons,
	alt,
}: HeaderProps) {
	const [isVideo, setIsVideo] = useState(false);

	useEffect(() => {
		if (backgroundVideo) {
			setIsVideo(true);
		}
	}, [backgroundVideo]);

	return (
		<header className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center bg-cover bg-center z-10">
			{isVideo && backgroundVideo ? (
				<video
					className="absolute inset-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={backgroundVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			) : (
				<Image
					src={backgroundImage as string}
					alt={alt as string}
					className="object-cover"
					priority
					width={1920}
					height={1080}
				/>
			)}

			<div className="flex flex-col gap-4 items-start justify-center relative z-10 text-white p-4 sm:p-8">
				<h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
				<p className="text-lg sm:text-xl mt-2 sm:mt-4">{subtitle}</p>
				<div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
					{buttons?.map((button, index) => (
						<a key={index.toString()} href={button.link} className="btn bg-theme_red text-white px-4 py-2 rounded-md mt-2 sm:mt-8 hover:bg-theme_dark_red transition-all duration-300">
							{button.label}
						</a>
					))}
				</div>
			</div>

			{/* darkening the background */}
			<div className="absolute inset-0 bg-black opacity-50"></div>
		</header>
	);
}
