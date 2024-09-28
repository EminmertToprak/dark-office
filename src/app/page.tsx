'use client';

import Header from '@/components/Header';
import SectionWithImage from '@/components/SectionWithImage';

export default function Home() {
	const mainStyle = {
		container: 'flex flex-col gap-8 min-h-screen font-[family-name:var(--font-geist-sans)]',
		sectionWithImage: 'flex flex-col gap-8 px-8 py-16 ',
	};
	return (
		<div className={mainStyle.container}>
			<Header
				title="Transform Your Factory’s Future Today"
				subtitle="Optimize, Innovate, and Scale with Our Advanced Factory Solutions."
				backgroundVideo="/videos/home_bg_video.mp4"
				buttons={[
					{
						label: 'Learn More',
						href: '/about',
					},
					{
						label: 'Request Demo',
						href: '/contact',
					},
				]}
			/>
			<main className={mainStyle.sectionWithImage}>
				<SectionWithImage
					title="Boost Efficiency Across Your Entire Factory"
					description="Increase efficiency and prevent waste with artificial intelligence recommendations supported by digital neural networks. Our solutions optimize every department involved in production."
					src="/images/boost_efficiency.png"
					imageAlt="Efficiency Image"
				/>
				<SectionWithImage
					title="Advanced Quality Management"
					description="Utilize advanced quality plans, visual inspection aids, and real-time tracking to enhance your production quality and traceability."
					src="/images/quality-management.png"
					imageAlt="QM Image"
					reverse={true}
				/>
				<SectionWithImage
					title="Intelligent Planning and Maintenance"
					description="Link multiple recipes and routes, manage capacity planning, and perform real-time workshop communication. Track maintenance to minimize unplanned downtimes and enhance operational flow.."
					src="/images/planning.jpeg"
					imageAlt="QM Image"
				/>
				<SectionWithImage
					title="Transparent Procurement and Sales Integration"
					description="Streamline procurement processes, automatically evaluate vendor quotes, and bridge the gap between production and sales with integrated tracking."
					src="/images/sales-integration.png"
					imageAlt="QM Image"
					reverse={true}
				/>
			</main>
		</div>
	);
}
