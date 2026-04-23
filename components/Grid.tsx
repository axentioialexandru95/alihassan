import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import type { StoryblokGridBlok } from '@/lib/storyblok-types';

type GridProps = {
	blok: StoryblokGridBlok;
};

const Grid = ({ blok }: GridProps) => (
	<div {...storyblokEditable(blok)} className="grid">
		{blok.columns.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default Grid;
