import { storyblokEditable } from '@storyblok/react/rsc';
import type { StoryblokTeaserBlok } from '@/lib/storyblok-types';

type TeaserProps = {
	blok: StoryblokTeaserBlok;
};

const Teaser = ({ blok }: TeaserProps) => {
	return (
		<div className="teaser" {...storyblokEditable(blok)}>
			<h1>{blok.headline}</h1>
		</div>
	);
};

export default Teaser;
