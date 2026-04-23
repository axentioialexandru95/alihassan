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
	descriptionClassName: string;
	image: {
		src: string;
		width: number;
		height: number;
		positionClassName: string;
		objectFitClassName: string;
	};
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
		tone: 'bg-problem-operational',
		descriptionClassName: 'max-w-[202px]',
		image: {
			src: '/images/problem-operational-inefficiencies.png',
			width: 162,
			height: 162,
			positionClassName:
				'right-4 bottom-4 h-[144px] w-[144px] sm:h-[162px] sm:w-[162px]',
			objectFitClassName: 'object-cover',
		},
	},
	{
		title: 'Staff Overload',
		description: 'Increased administrative burdens on your team',
		tone: 'bg-problem-staff',
		descriptionClassName: 'max-w-[259px]',
		image: {
			src: '/images/problem-staff-overload.png',
			width: 190,
			height: 166,
			positionClassName:
				'right-3 bottom-[15px] h-[145px] w-[166px] sm:h-[166px] sm:w-[190px]',
			objectFitClassName: 'object-contain',
		},
	},
	{
		title: 'Financial Management Issues',
		description: 'Difficulties in tracking and managing finances',
		tone: 'bg-problem-financial',
		descriptionClassName: 'max-w-[259px]',
		image: {
			src: '/images/problem-financial-management.png',
			width: 184,
			height: 160,
			positionClassName:
				'right-4 bottom-[18px] h-[140px] w-[161px] sm:h-[160px] sm:w-[184px]',
			objectFitClassName: 'object-contain',
		},
	},
	{
		title: 'Patient Scheduling Problems',
		description: 'Inefficient appointment scheduling and follow-ups',
		tone: 'bg-problem-scheduling',
		descriptionClassName: 'max-w-[255px]',
		image: {
			src: '/images/problem-patient-scheduling.png',
			width: 184,
			height: 160,
			positionClassName:
				'right-4 bottom-4 h-[140px] w-[161px] sm:h-[160px] sm:w-[184px]',
			objectFitClassName: 'object-contain',
		},
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
