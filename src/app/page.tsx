import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Navbar />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<h1>This is Homepage Header</h1>
					<h2>This is second header</h2>
					<p>This is paragraph.</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
