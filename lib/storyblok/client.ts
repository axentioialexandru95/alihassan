import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react/rsc';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { storyblokComponents } from './registry';

const apiBaseUrl = process.env.STORYBLOK_API_BASE_URL;

type StoryblokStoryResponse = {
	story: ISbStoryData;
};

type StoryblokVersion = NonNullable<ISbStoriesParams['version']>;

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: storyblokComponents,
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: process.env.STORYBLOK_REGION || 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: apiBaseUrl ? `${new URL(apiBaseUrl).origin}/v2` : undefined,
	},
});

export async function getStoryBySlug(
	slug: string,
	version: StoryblokVersion,
) {
	try {
		const storyblokApi = getStoryblokApi();
		const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
			version,
		});

		return (data as StoryblokStoryResponse).story;
	} catch (error) {
		if (isStoryblokNotFoundError(error)) {
			return null;
		}

		throw error;
	}
}

function isStoryblokNotFoundError(error: unknown) {
	if (!error || typeof error !== 'object') {
		return false;
	}

	const status = 'status' in error ? error.status : undefined;
	const statusCode = 'statusCode' in error ? error.statusCode : undefined;
	const response =
		'response' in error && error.response && typeof error.response === 'object'
			? error.response
			: undefined;
	const responseStatus =
		response && 'status' in response ? response.status : undefined;
	const responseStatusCode =
		response && 'statusCode' in response ? response.statusCode : undefined;

	return (
		status === 404 ||
		statusCode === 404 ||
		responseStatus === 404 ||
		responseStatusCode === 404
	);
}
