import { StoryblokStory } from '@storyblok/react/rsc';
import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

type StoryPageProps = {
	params: Promise<{
		slug?: string[];
	}>;
};

type StoryblokStoryResponse = {
	story: ISbStoryData;
};

export default async function StoryPage({ params }: StoryPageProps) {
	const { slug } = await params;

	const fullSlug = slug ? slug.join('/') : 'home';

	const sbParams: ISbStoriesParams = {
		version: 'draft',
	};

	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);
	const story = (data as StoryblokStoryResponse).story;

	return <StoryblokStory story={story} />;
}
