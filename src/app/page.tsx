'use client';

import Header from '@/components/Header';

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
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<div>
					<h1>This is Title</h1>
					<p>This is paragraph.</p>
				</div>
			</main>
		</div>
	);
}
