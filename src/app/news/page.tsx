'use client';
import Header from '@/components/Header';

export default function Industries() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header
				title="News Test title"
				subtitle="News Test subtitle"
				backgroundImage="/images/news_header.jpg"
			/>
			<h1>This is News Page.</h1>
		</div>
	);
}
