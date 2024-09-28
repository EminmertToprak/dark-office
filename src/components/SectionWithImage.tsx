import React from 'react';
import Image from 'next/image';

interface SectionWithImageProps {
	title: string;
	description: string;
	src: string;
	imageAlt: string;
	reverse?: boolean;
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({ title, description, src, imageAlt, reverse = false }) => {
	return (
		<section className={`flex flex-col-reverse md:flex-row gap-8 ${reverse ? 'md:flex-row-reverse' : ''} px-8 py-16 w-full max-w-7xl mx-auto items-center justify-center`}>
			<div id='texts' className='flex flex-col gap-4 max-w-2xl mx-auto text-center sm:text-left'>
				<h1 className='text-2xl font-bold text-center sm:text-left'>{title}</h1>
				<p className='text-center sm:text-left text-gray-300'>{description}</p>
			</div>
			<div id='section-image' className='w-full max-w-2xl mx-auto h-full'>
				{src ? (
					<Image
						src={src}
						alt={imageAlt}
						width={500}
						height={500}
						className='w-full h-auto'
					/>
				) : (
					<div className="w-full h-64 bg-gray-200 flex items-center justify-center">
						<span className="text-gray-500">Image not available</span>
					</div>
				)}
			</div>
		</section>
	);
};

export default SectionWithImage;

