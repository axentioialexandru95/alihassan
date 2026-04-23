import { StoryblokStory } from '@storyblok/react/rsc';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import DesignSystemPage from '@/features/design-system/DesignSystemPage';
import { getRouteSlug, isStaticRouteSlug } from '@/lib/routes';
import { getStoryBySlug } from '@/lib/storyblok/client';

type StoryPageProps = {
	params: Promise<{
		slug?: string[];
	}>;
};

export default async function StoryPage({ params }: StoryPageProps) {
	const { slug } = await params;
	const fullSlug = getRouteSlug(slug);

	if (isStaticRouteSlug(fullSlug)) {
		return <DesignSystemPage />;
	}

	const { isEnabled } = await draftMode();
	const version = isEnabled ? 'draft' : 'published';
	const story = await getStoryBySlug(fullSlug, version);

	if (!story) {
		notFound();
	}

	return (
		<StoryblokStory
			bridgeOptions={isEnabled ? {} : undefined}
			story={story}
		/>
	);
}
