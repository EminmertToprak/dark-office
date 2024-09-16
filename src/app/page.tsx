'use client';

import Header from '@/components/Header';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header
				title="Home title"
				subtitle="Home subtitle"
				backgroundImage="/images/home_header.jpg"
			/>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<h1>This is Title</h1>
					<p>This is paragraph.</p>
				</div>
			</main>
		</div>
	);
}
