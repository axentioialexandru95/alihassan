import type { SbBlokData } from '@storyblok/react/rsc';

export interface StoryblokPageBlok extends SbBlokData {
	body?: SbBlokData[];
}

export interface StoryblokGridBlok extends SbBlokData {
	columns: SbBlokData[];
}

export interface StoryblokFeatureBlok extends SbBlokData {
	name: string;
}

export interface StoryblokTeaserBlok extends SbBlokData {
	headline: string;
}
