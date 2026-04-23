import { storyblokEditable } from '@storyblok/react/rsc';
import type { StoryblokFeatureBlok } from '@/lib/storyblok/types';

type FeatureProps = {
	blok: StoryblokFeatureBlok;
};

const featureAccents = [
	'from-[#0b79ff] to-[#0561d8]',
	'from-[#16215b] to-[#2741a4]',
	'from-[#11a5c9] to-[#0d6fb0]',
	'from-[#2e90fa] to-[#6bcbff]',
];

const Feature = ({ blok }: FeatureProps) => {
	const featureName = blok.name?.trim() || 'Feature';
	const accent = featureAccents[featureName.length % featureAccents.length];
	const initial = featureName.charAt(0).toUpperCase();

	return (
		<article
			className="group flex h-full min-h-[250px] flex-col justify-between rounded-[28px] border border-white/75 bg-white p-6 shadow-[0_18px_48px_rgba(140,166,194,0.16)] transition duration-[220ms] ease-out hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(92,127,168,0.2)]"
			{...storyblokEditable(blok)}
		>
			<div className="flex items-start justify-between gap-4">
				<div
					className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br ${accent} text-lg font-semibold text-white shadow-[0_12px_28px_rgba(0,112,250,0.22)]`}
				>
					{initial}
				</div>
				<div className="rounded-full border border-[rgba(22,33,91,0.08)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-blue/80">
					Service
				</div>
			</div>

			<div className="mt-8">
				<h3 className="font-(family-name:--font-brand) text-[1.65rem] leading-tight font-semibold tracking-[-0.05em] text-brand-navy">
					{featureName}
				</h3>
				<p className="mt-4 text-sm leading-7 text-brand-muted">
					Clear guidance, faster decisions, and a care flow that feels more
					human than transactional.
				</p>
			</div>

			<div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-blue">
				Learn more
				<svg
					aria-hidden="true"
					className="h-4 w-4 transition duration-[220ms] ease-out group-hover:translate-x-1"
					fill="none"
					viewBox="0 0 16 16"
				>
					<path
						d="M3.5 8h8m0 0-3-3m3 3-3 3"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.4"
					/>
				</svg>
			</div>
		</article>
	);
};

export default Feature;
