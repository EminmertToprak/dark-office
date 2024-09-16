'use client';
import Header from '@/components/Header';

export default function Expertises() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header
				title="Expertises Test title"
				subtitle="Expertises Test subtitle"
				backgroundImage="/images/expertise_header.jpg"
			/>
			<h1>This is Expertises Page.</h1>
		</div>
	);
}
