import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import {
	ArrowRightIcon,
	ChevronDownIcon,
	HomeMarkIcon,
	OperationsMarkIcon,
} from '../icons';

export default function ReusablePatternsSection() {
	return (
		<section className="mt-4 rounded-[32px] bg-brand-soft px-5 py-7 sm:px-7 sm:py-8 lg:px-9">
			<SectionHeader
				eyebrow="Components"
				title="Reusable Patterns"
				description="These are the atomic patterns the landing page should keep reusing before inventing new UI."
			/>
			<div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
				<div className="rounded-[28px] bg-white p-5 shadow-[0_18px_48px_rgba(140,166,194,0.14)]">
					<p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">
						Primary Navigation
					</p>
					<div className="mt-5 overflow-x-auto rounded-full border border-brand-navy/14 bg-white p-1.5 shadow-[0_10px_32px_rgba(119,119,119,0.18)]">
						<div className="flex min-w-max items-center gap-1">
							<span className="inline-flex h-[50px] min-w-[112px] items-center justify-center gap-2 rounded-full bg-brand-blue px-5 text-sm text-white">
								<HomeMarkIcon className="h-4 w-4" />
								Home
							</span>
							<span className="inline-flex h-[50px] min-w-[112px] items-center justify-center rounded-full px-5 text-sm text-brand-navy">
								Services
							</span>
							<span className="inline-flex h-[50px] min-w-[112px] items-center justify-center rounded-full px-5 text-sm text-brand-navy">
								Speciality
							</span>
						</div>
					</div>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_34px_rgba(0,112,250,0.24)]"
							href="/#contact"
						>
							Book Appointment
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
						<button
							className="inline-flex items-center gap-2 rounded-full border border-brand-navy/12 bg-white px-6 py-3 text-sm font-semibold text-brand-navy"
							type="button"
						>
							Secondary
						</button>
					</div>
				</div>

				<div className="grid gap-4 sm:grid-cols-2">
					<article className="relative min-h-[230px] overflow-hidden rounded-[24px] bg-[#f7df68] p-6">
						<h3 className="max-w-[10ch] font-(family-name:--font-brand) text-[1.8rem] leading-[1.04] font-semibold tracking-[-0.05em] text-brand-navy">
							Operational Inefficiencies
						</h3>
						<p className="mt-5 max-w-[17ch] text-[15px] leading-7 text-brand-navy/80">
							Disjointed processes and workflows
						</p>
						<OperationsMarkIcon className="absolute right-5 bottom-5 h-24 w-24 text-brand-navy/16" />
					</article>
					<details
						className="group overflow-hidden rounded-[24px] bg-[#90b7f6]"
						open
					>
						<summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-brand-navy marker:content-none">
							<span className="flex items-center gap-3">
								<span className="text-[2rem] leading-none tracking-[-0.06em]">
									01
								</span>
								<span className="text-brand-navy/35">|</span>
								<span className="text-[1.1rem] font-medium tracking-[-0.04em]">
									Initial Assessment
								</span>
							</span>
							<ChevronDownIcon className="h-4 w-4" />
						</summary>
						<p className="px-5 pb-5 text-sm leading-7 text-brand-navy/82">
							Evaluate current operations and identify improvement areas.
						</p>
					</details>
				</div>
			</div>
		</section>
	);
}
