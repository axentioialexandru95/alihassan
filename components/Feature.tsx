import { storyblokEditable } from '@storyblok/react/rsc';
import type { StoryblokFeatureBlok } from '@/lib/storyblok-types';

type FeatureProps = {
	blok: StoryblokFeatureBlok;
};

const Feature = ({ blok }: FeatureProps) => {
	return (
		<div className="feature" {...storyblokEditable(blok)}>
			<span>{blok.name}</span>
		</div>
	);
};

export default Feature;
