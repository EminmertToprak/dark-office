'use client';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const newsItems = [
	{
		title: 'AI Summit 2024',
		description:
			'Join us at the AI Summit to explore how AI is transforming manufacturing.',
		imgSrc: '/images/ai_summit.jpeg',
	},
	{
		title: 'Product Launch',
		description:
			"We're excited to announce the launch of our latest AI-driven product.",
		imgSrc: '/images/product_launch.jpg',
	},
];

export default function NewsAndEvents() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % newsItems.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Header
				title="News & Events"
				subtitle="Stay Updated with Our Latest Innovations."
				backgroundVideo="/videos/news_bg_video.mp4"
			/>
			<section className="">
				<div className="relative w-full h-96 mt-8 overflow-hidden rounded-lg">
					{newsItems.map((news, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: currentIndex === index ? 1 : 0 }}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={news.imgSrc}
								alt={news.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
								<h3 className="text-white text-2xl font-bold">{news.title}</h3>
								<p className="text-white text-lg">{news.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
}
