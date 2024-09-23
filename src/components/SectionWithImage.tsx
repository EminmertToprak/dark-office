import React from 'react';
import Image from 'next/image';

interface SectionWithImageProps {
	title: string;
	description: string;
	imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({ title, description, imageUrl, imageAlt, reverse = false }) => {
    const imagePosition = reverse ? 'order-2' : 'order-1';

    return (
        <section className={`flex flex-row gap-8 ${reverse ? 'flex-row-reverse' : ''} px-8 py-16 w-full max-w-7xl mx-auto items-center justify-center`}>
        <div id='texts' className='flex flex-col gap-4 max-w-2xl mx-auto text-center sm:text-left'>
          <h1 className='text-2xl font-bold text-center sm:text-left '>{title}</h1>
          <p className='text-center sm:text-left text-gray-300 '>{description}</p>
        </div>
        <div id='section-image' className={`${imagePosition} w-full max-w-2xl mx-auto`}>
          <Image src={imageUrl} alt={imageAlt} width={500} height={500} />
        </div>
      </section>
    );
};

export default SectionWithImage;

