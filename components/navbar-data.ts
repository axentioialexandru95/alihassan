export type NavItem = {
	label: string;
	href: string;
	icon?: 'home';
	chevron?: boolean;
	dropdown?: {
		label: string;
		description: string;
		href: string;
	}[];
};

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/', icon: 'home' },
	{
		label: 'Services',
		href: '/#services',
		chevron: true,
		dropdown: [
			{
				label: 'Operational Optimization',
				description: 'Streamline workflows and remove bottlenecks.',
				href: '/#services',
			},
			{
				label: 'Financial Management',
				description: 'Track revenue, claims, and practice finances.',
				href: '/#services',
			},
			{
				label: 'Patient Scheduling',
				description: 'Improve appointment flow and follow-ups.',
				href: '/#services',
			},
		],
	},
	{
		label: 'Speciality',
		href: '/#speciality',
		chevron: true,
		dropdown: [
			{
				label: 'Holistic Management',
				description: 'End-to-end support across the whole practice.',
				href: '/#speciality',
			},
			{
				label: 'Staff Training',
				description: 'Equip teams around the updated workflows.',
				href: '/#speciality',
			},
			{
				label: 'Technology Integration',
				description: 'Connect tools, systems, and reporting routines.',
				href: '/#speciality',
			},
		],
	},
	{ label: 'About us', href: '/#about' },
	{ label: 'Contact', href: '/#contact' },
];
