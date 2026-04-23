import { problemCards } from '../data';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

export default function ProblemCardsSection() {
	return (
		<section className="px-3 pb-4 md:px-4 md:pb-5">
			<div className="rounded-[32px] bg-brand-soft px-5 py-7 sm:px-7 sm:py-8">
				<div className="grid gap-4 lg:grid-cols-4">
					{problemCards.map((card) => {
						const Icon = card.icon;

						return (
							<article
								className={`relative min-h-[270px] overflow-hidden rounded-[24px] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] ${card.tone}`}
								key={card.title}
							>
								<h2 className="max-w-[11ch] font-(family-name:--font-brand) text-[1.9rem] leading-[1.02] font-semibold tracking-[-0.05em] text-brand-navy">
									{card.title}
								</h2>
								<p className="mt-5 max-w-[17ch] text-[15px] leading-7 text-brand-navy/80">
									{card.description}
								</p>
								<div className="pointer-events-none absolute right-4 bottom-4 text-brand-navy/16">
									<Icon className="h-28 w-28" />
								</div>
							</article>
						);
					})}
				</div>
				<div className="mt-6 flex items-center justify-end gap-3 text-brand-navy/35">
					<button
						aria-label="Previous"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 bg-white/80"
						type="button"
					>
						<ArrowLeftIcon className="h-4 w-4" />
					</button>
					<div className="flex items-center gap-1.5">
						<span className="h-1.5 w-7 rounded-full bg-brand-blue" />
						{Array.from({ length: 6 }).map((_, index) => (
							<span
								className="h-1.5 w-1.5 rounded-full bg-brand-navy/18"
								key={index}
							/>
						))}
					</div>
					<button
						aria-label="Next"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 bg-white/80"
						type="button"
					>
						<ArrowRightIcon className="h-4 w-4" />
					</button>
				</div>
			</div>
		</section>
	);
}
