'use client';

import { getStoryblokApi } from '@/lib/storyblok';
import type { ReactNode } from 'react';

type StoryblokProviderProps = {
	children: ReactNode;
};

export default function StoryblokProvider({
	children,
}: StoryblokProviderProps) {
	getStoryblokApi();
	return <>{children}</>;
}
