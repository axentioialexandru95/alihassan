import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import StoryblokProvider from '@/components/StoryblokProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Alihassan UX',
  description:
    'Practice management landing page implemented from the Figma design in Next.js.',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} min-h-screen  text-brand-navy antialiased font-sans`}
      >
        <StoryblokProvider>
          <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1440px] flex-col overflow-hidden rounded-[20px] bg-white ">
            <Navbar />
            <div className="w-full flex-1">{children}</div>
            <SiteFooter />
          </div>
        </StoryblokProvider>
      </body>
    </html>
  );
}
