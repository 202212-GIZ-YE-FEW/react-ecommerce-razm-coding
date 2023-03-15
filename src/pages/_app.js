import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const OpenSans = Open_Sans({
	subsets: ['latin'],
	variable: '--open-sans',
});

export default function App({ Component, pageProps }) {
	return (
		<main className={`${OpenSans.variable} font-sans`}>
			<Component {...pageProps} />;
		</main>
	);
}
