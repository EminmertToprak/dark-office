import React from 'react';
import Image from 'next/image';

interface SectionWithImageProps {
	title: string;
	description: string;
	src: string;
	imageAlt: string;
	reverse?: boolean; // Optional prop to reverse the layout
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({ title, description, src, imageAlt, reverse = false }) => {
	return (
		<section className={`flex flex-col-reverse md:flex-row gap-8 ${reverse ? 'md:flex-row-reverse' : ''} px-8 py-16 w-full max-w-7xl mx-auto items-center justify-center`}>
			<div id='texts' className='flex flex-col gap-4 max-w-2xl mx-auto text-center sm:text-left'>
				<h1 className='text-2xl font-bold text-center sm:text-left'>{title}</h1>
				<p className='text-center sm:text-left text-gray-300'>{description}</p>
			</div>
			<div id='section-image' className='w-full max-w-2xl mx-auto h-full'>
				<Image src={src} alt={imageAlt} width={500} height={500} className='w-full h-auto'/>
			</div>
		</section>
	);
};

export default SectionWithImage;

