import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import type { StoryblokGridBlok } from '@/lib/storyblok-types';

type GridProps = {
	blok: StoryblokGridBlok;
};

const Grid = ({ blok }: GridProps) => (
	<section
		{...storyblokEditable(blok)}
		className="relative rounded-[32px] border border-white/60 bg-[rgba(255,255,255,0.82)] px-5 py-6 shadow-[0_20px_56px_rgba(140,166,194,0.14)] backdrop-blur sm:px-7 sm:py-8 lg:px-9 lg:py-10"
		id="services"
	>
		<div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
			<div className="max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue/75">
					Core services
				</p>
				<h2 className="mt-3 font-(family-name:--font-brand) text-[2rem] leading-tight font-semibold tracking-[-0.05em] text-brand-navy sm:text-[2.4rem]">
					Pharmacy support designed to feel immediate and dependable.
				</h2>
			</div>
			<p className="max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
				Each block below is now styled with Tailwind only. No more remote
				blueprint stylesheet, no legacy demo classes, just local component
				styles that fit the rest of the interface.
			</p>
		</div>
		<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
			{blok.columns.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	</section>
);

export default Grid;
