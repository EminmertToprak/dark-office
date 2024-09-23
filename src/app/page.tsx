'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import SectionWithImage from '@/components/SectionWithImage';

export default function Home() {
	return (
		<div className="flex flex-col gap-8 min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header
				title="Transform Your Factory’s Future Today"
				subtitle="Optimize, Innovate, and Scale with Our Advanced Factory Solutions."
				backgroundVideo="/videos/home_bg_video.mp4"
				buttons={[
					{
						label: 'Learn More',
						link: '/about',
					},
					{
						label: 'Request Demo',
						link: '/contact',
					},
				]}
			/>
			<main className="flex flex-col gap-8 items-center sm:items-start px-8 py-16">
				<SectionWithImage
					title="Boost Efficiency Across Your Entire Factory"
					description="Increase efficiency and prevent waste with artificial intelligence recommendations supported by digital neural networks. Our solutions optimize every department involved in production."
					imageUrl="/images/boost_efficiency.png"
					imageAlt="Efficiency Image"
				/>
				<SectionWithImage
					title="Advanced Quality Management"
					description="Utilize advanced quality plans, visual inspection aids, and real-time tracking to enhance your production quality and traceability."
					imageUrl="/images/quality-management.png"
					imageAlt="QM Image"
					reverse={true}
				/>
				<SectionWithImage
					title="Intelligent Planning and Maintenance"
					description="Link multiple recipes and routes, manage capacity planning, and perform real-time workshop communication. Track maintenance to minimize unplanned downtimes and enhance operational flow.."
					imageUrl="/images/planning.jpeg"
					imageAlt="QM Image"
				/>
				<SectionWithImage
					title="Transparent Procurement and Sales Integration"
					description="Streamline procurement processes, automatically evaluate vendor quotes, and bridge the gap between production and sales with integrated tracking."
					imageUrl="/images/sales-integration.png"
					imageAlt="QM Image"
					reverse={true}
				/>
			</main>
		</div>
	);
}
