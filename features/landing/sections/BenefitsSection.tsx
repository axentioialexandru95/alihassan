import { storyblokEditable } from '@storyblok/react/rsc';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import type { StoryblokLandingSectionProps } from '@/lib/storyblok/types';
import { benefits } from '../data';

export default function BenefitsSection({ blok }: StoryblokLandingSectionProps) {
	return (
		<SectionShell {...(blok ? storyblokEditable(blok) : {})}>
			<div className="rounded-[32px] bg-brand-soft px-5 py-8 sm:px-7 sm:py-10">
				<SectionHeading
					align="center"
					className="max-w-[16ch] text-[2.15rem] leading-[1.08] font-semibold tracking-[-0.06em] sm:text-[3rem]"
				>
					Why You&apos;ll Love Our Practice Management Services?
				</SectionHeading>
				<p className="mx-auto mt-4 max-w-[76ch] text-center text-[15px] leading-8 text-brand-muted">
					By outsourcing your practice management to True Care Medical Billing,
					you gain access to expert solutions that streamline operations, enhance
					efficiency, and reduce administrative burdens. This allows you to focus
					on providing exceptional patient care while we handle the details.
					Here&apos;s why you&apos;ll love our practice management solutions:
				</p>
				<div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
					{benefits.map((benefit) => (
						<article
							className={[
								'relative rounded-[24px] border px-6 py-10 text-center',
								benefit.active
									? 'border-brand-blue bg-brand-blue text-white shadow-[0_18px_38px_rgba(0,112,250,0.24)]'
									: 'border-brand-navy/16 bg-white text-brand-navy',
							].join(' ')}
							key={benefit.id}
						>
							<div className="absolute left-1/2 top-0 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-[1.7rem] leading-none tracking-[-0.06em] text-brand-navy shadow-[0_8px_18px_rgba(13,29,102,0.08)]">
								{benefit.id}
							</div>
							<h3 className="font-(family-name:--font-brand) text-[1.05rem] font-semibold tracking-[-0.04em]">
								{benefit.title}
							</h3>
							<p
								className={[
									'mt-4 text-[15px] leading-7',
									benefit.active ? 'text-white/86' : 'text-brand-navy/76',
								].join(' ')}
							>
								{benefit.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</SectionShell>
	);
}
