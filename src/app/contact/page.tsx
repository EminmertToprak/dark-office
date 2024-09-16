'use client';
import Header from '@/components/Header';

export default function Contact() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header
				title="Contact Test title"
				subtitle="Contact Test subtitle"
				backgroundImage="/images/contact_header.jpg"
			/>
			<h1>This is Contact Page.</h1>
		</div>
	);
}
