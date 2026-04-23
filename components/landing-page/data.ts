import type { ComponentType } from 'react';
import {
	FinanceOutlineIcon,
	OperationsIcon,
	SchedulingAlertIcon,
	ShieldCheckIcon,
	SparkGridIcon,
	TeamLoadIcon,
} from './icons';

type IconComponent = ComponentType<{ className?: string }>;

export type ProblemCard = {
	title: string;
	description: string;
	tone: string;
	icon: IconComponent;
};

export type ServiceItem = {
	name: string;
	description?: string;
	icon: IconComponent;
};

export type ProcessStep = {
	id: string;
	title: string;
	description: string;
	defaultOpen?: boolean;
};

export type Benefit = {
	id: string;
	title: string;
	description: string;
	active?: boolean;
};

export const problemCards: ProblemCard[] = [
	{
		title: 'Operational Inefficiencies',
		description: 'Disjointed processes and workflows',
		tone: 'bg-[#f7df68]',
		icon: OperationsIcon,
	},
	{
		title: 'Staff Overload',
		description: 'Increased administrative burdens on your team',
		tone: 'bg-[#a9e7e5]',
		icon: TeamLoadIcon,
	},
	{
		title: 'Financial Management Issues',
		description: 'Difficulties in tracking and managing finances',
		tone: 'bg-[#f2d3e2]',
		icon: FinanceOutlineIcon,
	},
	{
		title: 'Patient Scheduling Problems',
		description: 'Inefficient appointment scheduling and follow-ups',
		tone: 'bg-[#90b7f6]',
		icon: SchedulingAlertIcon,
	},
];

export const services: ServiceItem[] = [
	{
		name: 'Operational Optimization',
		description: 'Streamlined workflows and improved efficiency',
		icon: OperationsIcon,
	},
	{ name: 'Financial Management', icon: FinanceOutlineIcon },
	{ name: 'Patient Scheduling', icon: SchedulingAlertIcon },
	{ name: 'Compliance Support', icon: ShieldCheckIcon },
	{ name: 'Staff Training', icon: TeamLoadIcon },
	{ name: 'Technology Integration', icon: SparkGridIcon },
];

export const processSteps: ProcessStep[] = [
	{
		id: '01',
		title: 'Initial Assessment',
		description:
			'Evaluate your current practice operations and identify areas for improvement.',
		defaultOpen: true,
	},
	{
		id: '02',
		title: 'Customized Solution Design',
		description:
			'Build a plan around your workflows, staffing, scheduling, and reporting needs.',
	},
	{
		id: '03',
		title: 'Implementation',
		description:
			'Roll out the operational changes with clear owners, milestones, and system setup.',
	},
	{
		id: '04',
		title: 'Staff Training',
		description:
			'Train the front desk, clinical staff, and back office team on the updated process.',
	},
	{
		id: '05',
		title: 'Ongoing Support',
		description:
			'Keep the operation stable with issue follow-up, refinements, and responsive support.',
	},
	{
		id: '06',
		title: 'Performance Monitoring',
		description:
			'Track claims, revenue, scheduling health, and operational efficiency over time.',
	},
];

export const benefits: Benefit[] = [
	{
		id: '01',
		title: 'Improve Efficiency:',
		description: 'Streamline workflows and reduce operational bottlenecks',
		active: true,
	},
	{
		id: '02',
		title: 'Enhance Financial Performance:',
		description: 'Gain better control over finances and improve revenue management',
	},
	{
		id: '03',
		title: 'Optimize Scheduling:',
		description: 'Ensure effective appointment scheduling and patient follow-ups',
	},
	{
		id: '04',
		title: 'Ensure Compliance:',
		description: 'Stay compliant with regulatory requirements and avoid penalties',
	},
	{
		id: '05',
		title: 'Boost Staff Productivity:',
		description: 'Reduce administrative burdens and focus staff on patient care.',
	},
	{
		id: '06',
		title: 'Leverage Technology:',
		description: 'Utilize advanced practice management tools and software.',
	},
];

export const faqItems = [
	"How do you assess my practice's needs?",
	'What kind of support do you offer after implementation?',
	'Can your practice management services help with compliance issues?',
	'How do you integrate with existing practice management software?',
];
