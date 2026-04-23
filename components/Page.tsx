import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import type { StoryblokPageBlok } from '@/lib/storyblok-types';

type PageProps = {
	blok: StoryblokPageBlok;
};

const Page = ({ blok }: PageProps) => (
	<main {...storyblokEditable(blok)}>
		{blok.body?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
