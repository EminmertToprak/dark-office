import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = localFont({
	src: '../../public/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../../public/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Dark Office',
	description: 'Best MOM Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="min-h-screen w-full h-full">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d1117] min-h-screen w-full`}
			>
				<Navbar />
				<div id="page-content" className="w-full">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
