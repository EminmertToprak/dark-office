'use client';
import Header from '@/components/Header';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ExpertiseCard = ({
	title,
	description,
	details,
}: {
	title: string;
	description: string;
	details: string;
}) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<motion.div
			className={`relative w-full h-64 rounded-lg shadow-md cursor-pointer border backdrop-blur-md transform transition-transform duration-500 ${
				flipped ? 'rotate-y-180' : ''
			}`}
			onHoverStart={() => setFlipped(true)}
			onHoverEnd={() => setFlipped(false)}
		>
			<div className={`p-6 flex flex-col items-center justify-center h-full ${flipped ? '' : ''}`}>
				<h3 className={`text-${flipped ? 'xl' : '2xl'} font-bold`}>{flipped ? 'More Info' : title}</h3>
				<p>{flipped ? details : description}</p>
			</div>
		</motion.div>
	);
};

export default function Expertises() {
	return (
		<>
			<Header
				title="Our Expertise"
				subtitle="Innovative Solutions for Modern Manufacturing"
				backgroundVideo="/videos/expertises_bg_video.mp4"
			/>
			<section className="py-16 px-4 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center">
					<ExpertiseCard
						title="Artificial Intelligence"
						description="AI-driven solutions for predictive maintenance."
						details="AI integrates with our systems to detect faults and reduce downtime, optimizing factory performance."
					/>
					<ExpertiseCard
						title="Automation"
						description="Automating routine tasks to enhance efficiency."
						details="Automation helps reduce human error, increase production speed, and ensures higher output quality."
					/>
					<ExpertiseCard
						title="Data Analytics"
						description="Leverage data insights for real-time decision-making."
						details="Our data analytics tools provide insights into production trends, helping you make informed decisions quickly."
					/>
				</div>
			</section>
		</>
	);
}
