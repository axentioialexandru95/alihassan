import Link from 'next/link';

type ColorToken = {
	name: string;
	value: string;
	usage: string;
	text?: 'light' | 'dark';
};

type TypeScale = {
	name: string;
	className: string;
	sample: string;
	meta: string;
};

const colorTokens: ColorToken[] = [
	{
		name: 'Primary Blue',
		value: '#0070FA',
		usage: 'Primary actions, active navigation, CTA panels',
		text: 'light',
	},
	{
		name: 'Base Navy',
		value: '#16215B',
		usage: 'Headlines, dark sections, key interface text',
		text: 'light',
	},
	{
		name: 'Soft Surface',
		value: '#F4F6FB',
		usage: 'Section panels, FAQ rows, quiet page backgrounds',
	},
	{
		name: 'Muted Text',
		value: '#6F7BA8',
		usage: 'Body copy, descriptions, secondary labels',
		text: 'light',
	},
	{
		name: 'Operational Yellow',
		value: '#F7DF68',
		usage: 'Problem card accent',
	},
	{
		name: 'Workflow Aqua',
		value: '#A9E7E5',
		usage: 'Problem card accent and healthcare calm states',
	},
	{
		name: 'Billing Pink',
		value: '#F2D3E2',
		usage: 'Appointment CTA and finance surfaces',
	},
	{
		name: 'Scheduling Blue',
		value: '#90B7F6',
		usage: 'Process panels and scheduling cards',
	},
	{
		name: 'Success Mint',
		value: '#3AD8C1',
		usage: 'Active service labels on navy',
	},
];

const typeScale: TypeScale[] = [
	{
		name: 'Display',
		className:
			'font-(family-name:--font-brand) text-[4rem] leading-normal font-semibold tracking-[-0.05em] text-brand-navy sm:text-[7rem]',
		sample: 'Pharmacy',
		meta: 'Rebond Grotesque 600, normal leading, -5% tracking',
	},
	{
		name: 'Section Heading',
		className:
			'font-(family-name:--font-brand) text-[2.6rem] leading-[1.22] font-extrabold tracking-[-0.02em] text-brand-navy',
		sample: 'Practice Management Services',
		meta: 'Rebond Grotesque 800, 44px-style leading, -2% tracking',
	},
	{
		name: 'Card Heading',
		className:
			'font-(family-name:--font-brand) text-[1.9rem] leading-[1.04] font-semibold tracking-[-0.05em] text-brand-navy',
		sample: 'Operational Inefficiencies',
		meta: 'Rebond Grotesque 600, -5% tracking',
	},
	{
		name: 'Body',
		className: 'max-w-xl text-[15px] leading-8 text-brand-muted',
		sample:
			'Streamline workflows, improve financial management, and enhance patient care with a calmer operating model.',
		meta: 'Plus Jakarta Sans Regular, 15px, relaxed leading',
	},
];

const spacingTokens = [
	{ name: 'Canvas Radius', value: '20px', usage: 'Outer app shell' },
	{ name: 'Section Radius', value: '28-32px', usage: 'Major landing sections' },
	{ name: 'Card Radius', value: '18-24px', usage: 'Cards, accordions, control rows' },
	{ name: 'Pill Radius', value: '999px', usage: 'Navigation and primary actions' },
	{ name: 'Section Gap', value: '16-20px', usage: 'Vertical rhythm between panels' },
	{ name: 'Content Padding', value: '24-40px', usage: 'Responsive section interiors' },
];

const componentRules = [
	{
		title: 'Navigation Pill',
		description:
			'White rounded container with a blue active item. Keep labels short enough to stay pill-shaped.',
	},
	{
		title: 'Primary Button',
		description:
			'Blue, rounded, medium weight, always paired with either a directional icon or a clear action label.',
	},
	{
		title: 'Soft Section',
		description:
			'Use #F4F6FB with large radius for calmer content blocks, FAQs, and multi-card sections.',
	},
	{
		title: 'Navy Section',
		description:
			'Use #16215B for high-contrast conversion moments, services, and footer blocks.',
	},
];

export default function DesignSystemPage() {
	return (
		<main className="px-3 pb-3 md:px-4 md:pb-4">
			<section className="relative overflow-hidden rounded-[32px] bg-brand-navy px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
				<div className="pointer-events-none absolute right-[-8rem] top-[-9rem] h-96 w-96 rounded-full border-[42px] border-white/6" />
				<div className="pointer-events-none absolute bottom-[-7rem] left-[42%] h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
				<div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
					<div>
						<p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#3ad8c1]">
							Design System
						</p>
						<h1 className="mt-6 max-w-[11ch] font-(family-name:--font-brand) text-[3.8rem] leading-[0.9] font-semibold tracking-[-0.08em] text-white sm:text-[6.6rem]">
							Alihassan UX
						</h1>
						<p className="mt-6 max-w-[58ch] text-[15px] leading-8 text-white/76">
							A practical implementation guide for the pharmacy landing page:
							color tokens, type rules, spacing, core components, and the
							interaction patterns that keep the interface consistent.
						</p>
					</div>
					<div className="rounded-[28px] border border-white/12 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
						<div className="text-white relative inline-flex w-fit text-[2.1rem] leading-none font-bold tracking-[-0.08em] font-(family-name:--font-brand)">
							<span>ALIHASSAN</span>
							<span className="absolute -top-2 -right-4 text-[0.9rem] font-bold tracking-[-0.05em] text-brand-blue">
								UX
							</span>
						</div>
						<div className="mt-8 grid grid-cols-2 gap-3">
							<div className="rounded-[20px] bg-brand-blue p-5 text-white">
								<p className="text-xs uppercase tracking-[0.22em] text-white/68">
									Primary
								</p>
								<p className="mt-7 text-2xl font-semibold tracking-[-0.05em]">
									#0070FA
								</p>
							</div>
							<div className="rounded-[20px] bg-[#f3d0dd] p-5 text-brand-navy">
								<p className="text-xs uppercase tracking-[0.22em] text-brand-navy/54">
									CTA Accent
								</p>
								<p className="mt-7 text-2xl font-semibold tracking-[-0.05em]">
									Pink
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-4 rounded-[32px] bg-brand-soft px-5 py-7 sm:px-7 sm:py-8 lg:px-9">
				<SectionHeader
					eyebrow="Foundations"
					title="Color Tokens"
					description="These are the colors used by the Figma page and the implementation. Use the semantic role first, not just the hex value."
				/>
				<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{colorTokens.map((token) => (
						<article
							className="overflow-hidden rounded-[24px] border border-brand-navy/8 bg-white"
							key={token.name}
						>
							<div
								className={[
									'flex min-h-[150px] items-end p-5',
									token.text === 'light' ? 'text-white' : 'text-brand-navy',
								].join(' ')}
								style={{ backgroundColor: token.value }}
							>
								<p className="text-2xl font-semibold tracking-[-0.06em]">
									{token.value}
								</p>
							</div>
							<div className="p-5">
								<h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-brand-navy">
									{token.name}
								</h3>
								<p className="mt-2 text-sm leading-7 text-brand-muted">
									{token.usage}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="mt-4 rounded-[32px] bg-white px-5 py-7 sm:px-7 sm:py-8 lg:px-9">
				<SectionHeader
					eyebrow="Typography"
					title="Type Scale"
					description="Rebond Grotesque carries the brand, display, and title voice. Plus Jakarta Sans handles readable body copy and UI labels."
				/>
				<div className="mt-7 space-y-4">
					{typeScale.map((item) => (
						<article
							className="rounded-[24px] border border-brand-navy/10 bg-brand-soft p-5 sm:p-6"
							key={item.name}
						>
							<div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
									{item.name}
								</h3>
								<p className="text-sm text-brand-muted">{item.meta}</p>
							</div>
							<p className={item.className}>{item.sample}</p>
						</article>
					))}
				</div>
			</section>

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

			<section className="mt-4 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="rounded-[32px] bg-white px-5 py-7 sm:px-7">
					<SectionHeader
						eyebrow="Spacing"
						title="Layout Rules"
						description="The system uses big rounded panels with small, steady gaps. This keeps the page soft without making it feel loose."
					/>
					<div className="mt-6 space-y-3">
						{spacingTokens.map((token) => (
							<div
								className="grid gap-3 rounded-[18px] bg-brand-soft p-4 sm:grid-cols-[130px_110px_minmax(0,1fr)]"
								key={token.name}
							>
								<strong className="text-brand-navy">{token.name}</strong>
								<span className="font-mono text-sm text-brand-blue">
									{token.value}
								</span>
								<span className="text-sm leading-6 text-brand-muted">
									{token.usage}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="rounded-[32px] bg-brand-navy px-5 py-7 text-white sm:px-7">
					<SectionHeader
						dark
						eyebrow="Usage"
						title="Rules Before New Components"
						description="Use this checklist when adding sections so the page keeps one coherent visual language."
					/>
					<div className="mt-7 grid gap-4 sm:grid-cols-2">
						{componentRules.map((rule) => (
							<article
								className="rounded-[22px] border border-white/12 bg-white/8 p-5"
								key={rule.title}
							>
								<h3 className="text-[1.25rem] font-semibold tracking-[-0.05em] text-[#3ad8c1]">
									{rule.title}
								</h3>
								<p className="mt-3 text-sm leading-7 text-white/70">
									{rule.description}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

function SectionHeader({
	eyebrow,
	title,
	description,
	dark = false,
}: {
	eyebrow: string;
	title: string;
	description: string;
	dark?: boolean;
}) {
	return (
		<div>
			<p
				className={[
					'text-xs font-semibold uppercase tracking-[0.28em]',
					dark ? 'text-[#3ad8c1]' : 'text-brand-blue',
				].join(' ')}
			>
				{eyebrow}
			</p>
			<h2
				className={[
					'mt-3 font-(family-name:--font-brand) text-[2.35rem] leading-[1.04] font-semibold tracking-[-0.06em] sm:text-[3rem]',
					dark ? 'text-white' : 'text-brand-navy',
				].join(' ')}
			>
				{title}
			</h2>
			<p
				className={[
					'mt-4 max-w-[62ch] text-[15px] leading-8',
					dark ? 'text-white/70' : 'text-brand-muted',
				].join(' ')}
			>
				{description}
			</p>
		</div>
	);
}

function ArrowRightIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 16 16"
		>
			<path
				d="M5.5 3.5 10 8l-4.5 4.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}

function ChevronDownIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 14 8"
		>
			<path
				d="M2 2.25 7 5.75l5-3.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

function HomeMarkIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				d="M4.5 10.75 12 4.5l7.5 6.25V19a1 1 0 0 1-1 1H14v-5.25h-4V20H5.5a1 1 0 0 1-1-1z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function OperationsMarkIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			viewBox="0 0 96 96"
		>
			<path
				d="M14 77V35m18 42V23m18 54V46m18 31V11"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
			<path
				d="m8 25 10-8 12 11 11-7 12 9 11-15 11 8"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
			/>
			<circle cx="74" cy="72" r="12" stroke="currentColor" strokeWidth="4" />
			<path
				d="M74 64v8l6 4"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="4"
			/>
		</svg>
	);
}
