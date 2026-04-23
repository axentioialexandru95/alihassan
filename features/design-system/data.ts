export type ColorToken = {
	name: string;
	token: string;
	value: string;
	usage: string;
	text?: 'light' | 'dark';
};

export type TypeScale = {
	name: string;
	className: string;
	sample: string;
	meta: string;
};

export const colorTokens: ColorToken[] = [
	{
		name: 'Primary Blue',
		token: '--color-brand-blue',
		value: '#0070FA',
		usage: 'Primary actions, active navigation, CTA panels',
		text: 'light',
	},
	{
		name: 'Base Navy',
		token: '--color-brand-navy',
		value: '#16215B',
		usage: 'Headlines, dark sections, key interface text',
		text: 'light',
	},
	{
		name: 'Soft Surface',
		token: '--color-brand-soft',
		value: '#F4F6FB',
		usage: 'Section panels, FAQ rows, quiet page backgrounds',
	},
	{
		name: 'Muted Text',
		token: '--color-brand-muted',
		value: '#6F7BA8',
		usage: 'Body copy, descriptions, secondary labels',
		text: 'light',
	},
	{
		name: 'Operational Yellow',
		token: '--color-problem-operational',
		value: '#F0DA6A',
		usage: 'Problem card accent',
	},
	{
		name: 'Workflow Aqua',
		token: '--color-problem-staff',
		value: '#A0E2E1',
		usage: 'Problem card accent and healthcare calm states',
	},
	{
		name: 'Billing Pink',
		token: '--color-brand-pink',
		value: '#E7C2D4',
		usage: 'Appointment CTA and finance surfaces',
	},
	{
		name: 'Scheduling Blue',
		token: '--color-problem-scheduling',
		value: '#93BDF7',
		usage: 'Process panels and scheduling cards',
	},
	{
		name: 'Success Mint',
		token: '--color-brand-mint',
		value: '#18E4A1',
		usage: 'Active service labels on navy',
	},
];

export const typeScale: TypeScale[] = [
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

export const spacingTokens = [
	{ name: 'Canvas Radius', value: '20px', usage: 'Outer app shell' },
	{ name: 'Section Radius', value: '28-32px', usage: 'Major landing sections' },
	{
		name: 'Card Radius',
		value: '18-24px',
		usage: 'Cards, accordions, control rows',
	},
	{ name: 'Pill Radius', value: '999px', usage: 'Navigation and primary actions' },
	{ name: 'Section Gap', value: '16-20px', usage: 'Vertical rhythm between panels' },
	{ name: 'Content Padding', value: '24-40px', usage: 'Responsive section interiors' },
];

export const componentRules = [
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
