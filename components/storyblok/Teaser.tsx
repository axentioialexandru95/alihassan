import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonLink from '@/components/ui/ButtonLink';
import type { StoryblokTeaserBlok } from '@/lib/storyblok/types';
import { teaserExperienceChips } from './teaser-data';

type TeaserProps = {
	blok: StoryblokTeaserBlok;
};

const Teaser = ({ blok }: TeaserProps) => {
	return (
		<section
			className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(238,247,255,0.92))] px-6 py-8 shadow-[0_22px_65px_rgba(140,166,194,0.18)] backdrop-blur sm:px-8 sm:py-10 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-10 lg:px-12 lg:py-14"
			{...storyblokEditable(blok)}
		>
			<div className="pointer-events-none absolute left-[-10%] top-[-20%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,112,250,0.18),transparent_65%)]" />
			<div className="pointer-events-none absolute bottom-[-25%] right-[-8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(22,33,91,0.1),transparent_62%)]" />
			<div className="relative">
				<div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,112,250,0.12)] bg-white/70 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-blue">
					<span className="h-2 w-2 rounded-full bg-brand-blue" />
					Community-focused care
				</div>
				<h1 className="mt-6 max-w-[12ch] font-(family-name:--font-brand) text-[2.65rem] leading-[0.95] font-semibold tracking-[-0.06em] text-brand-navy sm:text-[3.4rem] lg:text-[4.5rem]">
					{blok.headline}
				</h1>
				<p className="mt-5 max-w-2xl text-[1rem] leading-8 text-brand-muted sm:text-[1.0625rem]">
					A calmer, more trusted pharmacy experience with specialist guidance,
					faster access, and digital care journeys that feel human from the
					first click.
				</p>
				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<ButtonLink
						className="h-12 px-6 text-sm font-medium shadow-[0_14px_28px_rgba(0,112,250,0.25)] hover:shadow-[0_18px_32px_rgba(0,112,250,0.28)]"
						href="#contact"
					>
						Book a consultation
					</ButtonLink>
					<ButtonLink
						className="h-12 px-6 text-sm font-medium"
						href="#services"
						variant="ghost"
					>
						Explore services
					</ButtonLink>
				</div>
			</div>

			<div className="relative mt-10 grid gap-4 rounded-[28px] border border-white/80 bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:grid-cols-2 lg:mt-0">
				<div className="rounded-[22px] bg-[linear-gradient(180deg,#0b79ff,#0561d8)] p-5 text-white shadow-[0_18px_30px_rgba(0,112,250,0.2)]">
					<p className="text-xs uppercase tracking-[0.24em] text-white/70">
						Access
					</p>
					<p className="mt-4 text-3xl font-semibold tracking-[-0.06em]">24/7</p>
					<p className="mt-2 text-sm leading-6 text-white/82">
						Appointment requests, follow-ups, and refill support in one place.
					</p>
				</div>
				<div className="rounded-[22px] border border-[rgba(22,33,91,0.08)] bg-[rgba(241,247,255,0.95)] p-5">
					<p className="text-xs uppercase tracking-[0.24em] text-brand-blue/80">
						Trust
					</p>
					<p className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-brand-navy">
						98%
					</p>
					<p className="mt-2 text-sm leading-6 text-brand-muted">
						Patients say clarity and reassurance are the reason they come back.
					</p>
				</div>
				<div className="rounded-[22px] border border-[rgba(22,33,91,0.08)] bg-white p-5 sm:col-span-2">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-xs uppercase tracking-[0.24em] text-brand-blue/80">
								Experience
							</p>
							<p className="mt-3 font-(family-name:--font-brand) text-2xl font-semibold tracking-[-0.05em] text-brand-navy">
								Designed to feel clinical, clear, and genuinely supportive.
							</p>
						</div>
						<div className="grid grid-cols-3 gap-2 rounded-[20px] bg-[rgba(245,250,255,0.95)] p-2">
							{teaserExperienceChips.map((item) => (
								<div
									className="rounded-2xl bg-white px-3 py-4 text-center text-xs font-semibold tracking-[0.12em] text-brand-navy uppercase shadow-[0_8px_18px_rgba(140,166,194,0.12)]"
									key={item}
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Teaser;
