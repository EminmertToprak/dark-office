'use client';

import Header from '@/components/Header';

export default function About() {
	return (
		<div
			id="about-page"
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]"
		>
			<Header
				title="About Test title"
				subtitle="About Test subtitle"
				backgroundImage="/images/about_header.png"
			/>
			<h1>This is About Page.</h1>
		</div>
	);
}
