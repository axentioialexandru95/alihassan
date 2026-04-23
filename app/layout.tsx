import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Sora } from 'next/font/google';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import StoryblokProvider from '@/components/StoryblokProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-sans',
});

const sora = Sora({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-brand',
	weight: ['600', '700'],
});

export const metadata: Metadata = {
	title: 'Alihassan UX',
	description: 'Pharmacy website experience powered by Storyblok and Next.js.',
};

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
	const currentYear = new Date().getFullYear();
	return (
		<html lang="en">
			<body
				className={`${plusJakartaSans.variable} ${sora.variable} min-h-screen bg-[radial-gradient(circle_at_top_left,#f5faff_0%,#ffffff_52%)] text-brand-navy antialiased font-sans`}
			>
				<StoryblokProvider>
					<div className="flex min-h-screen flex-col">
						<Navbar />
						<div className="w-full flex-1">{children}</div>
						<footer className="px-5 pt-6 pb-9 text-center text-[0.9rem] text-brand-muted">
							All rights reserved © {currentYear}
						</footer>
					</div>
				</StoryblokProvider>
			</body>
		</html>
	);
}
