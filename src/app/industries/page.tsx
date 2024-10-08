'use client';
import Header from '@/components/Header';
import { useEffect, useRef } from 'react';

const industries = [
	{
		title: 'Automotive',
		description:
			'Optimize production and supply chain management with real-time insights.',
		image: '/images/automotive.jpeg',
	},
	{
		title: 'Pharmaceuticals',
		description:
			'Enhance quality control and traceability to ensure compliance.',
		image: '/images/pharmaceuticals.png',
	},
	{
		title: 'Electronics',
		description:
			'Streamline production with automation and smart manufacturing solutions.',
		image: '/images/electronics.jpg',
	},
];

const partnerImages = [
	'/images/partners/microsoft_logo.png',
	'/images/partners/robusta_logo.png',
	'/images/partners/xpoda_logo.jpeg',
	'/images/partners/veriban_logo.png',
];

export default function Industries() {
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (carousel) {
			// Duplicate the images for seamless scrolling
			const images = partnerImages.concat(partnerImages);
			carousel.innerHTML = ''; // Clear existing content
			images.forEach((image, index) => {
				const article = document.createElement('article');
				article.className = 'slide'; // Use the same class as in the example
				article.innerHTML = `<img src="${image}" alt="Partner ${
					index + 1
				}" class="w-48 h-48" />`;
				carousel.appendChild(article);
			});
		}
	}, []);

	return (
		<>
			<Header
				title="Industries We Serve"
				subtitle="From automotive to pharmaceuticals, our technology enhances efficiency across a range of industries."
				backgroundVideo="/videos/industries_bg_video.mp4"
			/>
			<section id="industries" className="py-16">
				<h2 className="text-3xl font-bold text-center mb-10">Key Industries</h2>
				<div
					id="key-industries"
					className="flex flex-wrap gap-6 justify-center relative z-10"
				>
					{industries.map((industry, index) => (
						<div
							key={index}
							className="relative group w-80 h-60 p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-theme_dark_gray"
						>
							<div
								className="absolute inset-0 rounded-lg"
								style={{
									backgroundImage: `url(${industry.image})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									opacity: 0.3,
								}}
							></div>
							<div className="relative z-10">
								{' '}
								{/* This div ensures text is above the background */}
								<h3 className="text-2xl font-semibold mb-8 text-center">
									{industry.title}
								</h3>
								<p className="text-center">{industry.description}</p>
							</div>
						</div>
					))}
				</div>
				<div className="my-10">
					<h2 className="text-3xl font-bold text-center mb-10">
						ENS Business Partners
					</h2>
					<div
						id="partners" // Updated carousel ID
						className="slider"
					>
						<div className="slide-track" ref={carouselRef}>
							{/* Images will be populated in useEffect */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
