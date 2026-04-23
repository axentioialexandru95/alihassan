import SectionHeading from '@/components/ui/SectionHeading';
import { faqItems } from '../data';
import { ChevronDownIcon } from '../icons';

export default function FaqSection() {
	return (
		<section className="px-3 md:px-4" id="blog">
			<div className="px-2 py-5 sm:px-6 sm:py-7">
				<SectionHeading
					align="center"
					className="text-[2.2rem] leading-[1.05] font-semibold tracking-[-0.06em] sm:text-[3rem]"
				>
					Frequently Asked Questions
				</SectionHeading>
				<div className="mx-auto mt-8 max-w-[920px] space-y-4">
					{faqItems.map((question) => (
						<details
							className="group rounded-[18px] bg-brand-soft px-4 py-4 text-brand-navy sm:px-5"
							key={question}
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1rem] font-medium tracking-[-0.03em] marker:content-none">
								<span>{question}</span>
								<span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-brand-navy/70 transition duration-200 group-open:rotate-180">
									<ChevronDownIcon className="h-4 w-4" />
								</span>
							</summary>
							<p className="pt-4 text-sm leading-7 text-brand-muted">
								We review your workflows, claims, scheduling patterns, and team
								handoffs first, then shape the rollout around the actual
								bottlenecks we find.
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
