import {
	footerContactLines,
	serviceLinks,
	socialLinks,
	supportLinks,
	usefulLinks,
} from './site-footer-data';

export default function SiteFooter() {
	return (
		<footer className="px-3 pt-2 pb-3 md:px-4 md:pb-4" id="contact">
			<div className="rounded-[28px] bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-11">
				<div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_0.8fr_0.8fr]">
					<div>
						<div className="text-white relative inline-flex w-fit text-[1.8rem] leading-none font-bold tracking-[-0.08em] font-(family-name:--font-brand)">
							<span>ALIHASSAN</span>
							<span className="absolute -top-1.5 -right-3.5 text-[0.9rem] font-bold tracking-[-0.05em] text-brand-blue">
								UX
							</span>
						</div>
						<p className="mt-6 max-w-[29ch] text-sm leading-7 text-white/70">
							We&apos;ll show you exactly how you can achieve 30% increase in
							revenue and a 99.9% claim rate within 120 days, while focusing
							more on patient care.
						</p>
						<div className="mt-6 flex items-center gap-3">
							{socialLinks.map((item) => (
								<span
									className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/18 text-sm font-semibold text-white/84"
									key={item}
								>
									{item}
								</span>
							))}
						</div>
						<div className="mt-8 space-y-4 text-sm text-white/78">
							{footerContactLines.map((line) => (
								<FooterLine
									key={line.label}
									shortLabel={line.shortLabel}
									value={line.value}
								/>
							))}
						</div>
					</div>

					<FooterColumn heading="Our Services" items={serviceLinks} />
					<FooterColumn heading="Customer Support" items={supportLinks} />

					<div className="flex h-full flex-col justify-between gap-6">
						<FooterColumn heading="Useful Links" items={usefulLinks} />
						<a
							className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_28px_rgba(0,112,250,0.24)] transition duration-200 ease-out hover:-translate-y-px"
							href="#top"
						>
							Back To Top
							<ArrowUpIcon className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterColumn({
	heading,
	items,
}: {
	heading: string;
	items: string[];
}) {
	return (
		<div>
			<h2 className="font-(family-name:--font-brand) text-[1.55rem] font-semibold tracking-[-0.05em] text-[#3ad8c1]">
				{heading}
			</h2>
			<ul className="mt-5 space-y-3.5 p-0 text-sm leading-6 text-white/74">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}

function FooterLine({
	shortLabel,
	value,
}: {
	shortLabel: string;
	value: string;
}) {
	return (
		<div className="flex items-center gap-3">
			<span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#3ad8c1]/30 text-[#3ad8c1]">
				{shortLabel}
			</span>
			<span>{value}</span>
		</div>
	);
}

function ArrowUpIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 16 16"
		>
			<path
				d="M8 12.5v-9m0 0L4.75 6.75M8 3.5l3.25 3.25"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}
