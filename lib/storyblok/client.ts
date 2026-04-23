import type { ISbStoriesParams, ISbStoryData } from '@storyblok/react/rsc';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { storyblokComponents } from './registry';

const storyblokAccessToken = getRequiredEnv('STORYBLOK_DELIVERY_API_TOKEN');

type StoryblokStoryResponse = {
	story: ISbStoryData;
};

type StoryblokVersion = NonNullable<ISbStoriesParams['version']>;

export const getStoryblokApi = storyblokInit({
	accessToken: storyblokAccessToken,
	use: [apiPlugin],
	components: storyblokComponents,
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: getStoryblokRegion(),
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: getStoryblokEndpoint(),
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

function getRequiredEnv(name: string) {
	const value = process.env[name]?.trim();

	if (!value || isPlaceholderEnvValue(value)) {
		throw new Error(
			`Missing ${name}. Add it to the Vercel project environment variables, then redeploy.`,
		);
	}

	return value;
}

function getStoryblokRegion() {
	const region = process.env.STORYBLOK_REGION?.trim();

	if (!region || isPlaceholderEnvValue(region)) {
		return 'eu';
	}

	return region;
}

function getStoryblokEndpoint() {
	const apiBaseUrl = process.env.STORYBLOK_API_BASE_URL?.trim();

	if (!apiBaseUrl || isPlaceholderEnvValue(apiBaseUrl)) {
		return undefined;
	}

	try {
		return `${new URL(apiBaseUrl).origin}/v2`;
	} catch {
		throw new Error(
			`Invalid STORYBLOK_API_BASE_URL: "${apiBaseUrl}". Use a full URL or remove the variable.`,
		);
	}
}

function isPlaceholderEnvValue(value: string) {
	return value.startsWith('<') && value.endsWith('>');
}
