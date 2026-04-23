import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import type { StoryblokLandingSectionProps } from '@/lib/storyblok/types';
import { ArrowRightIcon } from '../icons';

export default function SolutionsSection({ blok }: StoryblokLandingSectionProps) {
	return (
		<SectionShell
			{...(blok ? storyblokEditable(blok) : {})}
			id="about"
		>
			<div
				className="rounded-card bg-brand-soft px-5 py-7 sm:px-8 sm:py-9 lg:px-[66px] lg:py-[54px]"
				data-node-id="7:1101"
			>
				<div
					className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[88px]"
					data-node-id="7:1102"
				>
					<div
						className="relative h-[340px] overflow-hidden rounded-[16px] bg-[#d0e4ff] sm:h-[440px] lg:h-[521px] lg:w-[500px] lg:shrink-0"
						data-node-id="7:1103"
					>
						<Image
							alt="Medical team reviewing practice operations."
							className="absolute top-0 left-[-40.54%] h-full w-[156.28%] max-w-none object-cover"
							height={1200}
							src="/pharmacy/solutions-management.jpg"
							width={1800}
						/>
					</div>

					<div
						className="flex flex-col items-start gap-4 lg:w-[670px] lg:shrink-0"
						data-node-id="7:1109"
					>
						<div
							className="inline-flex h-10 items-center justify-center rounded-[9px] border border-brand-mint px-[10px] py-2 text-center text-base font-semibold tracking-[-0.16px] text-[#3d4966] uppercase"
							data-node-id="7:1110"
						>
							SOLUTIONS
						</div>
						<div className="flex w-full flex-col gap-4" data-node-id="7:1112">
							<SectionHeading
								className="font-(family-name:--font-brand) text-[32px] leading-[1.18] font-extrabold tracking-[-0.64px] text-brand-navy sm:text-[36px] sm:leading-[44px] sm:tracking-[-0.72px]"
								data-node-id="7:1113"
							>
								Transform Your Practice with Our All-Inclusive Management
								Solutions
							</SectionHeading>
							<p
								className="max-w-[610px] text-base leading-[1.6] font-medium text-asklepios-gray-60 sm:text-lg"
								data-node-id="7:1114"
							>
								True Care Medical Billing offers a robust practice management
								solution designed to address these challenges and optimize your
								practice operations. Our services streamline workflows, improve
								financial management, and enhance patient care, allowing you to
								focus on what matters most, providing exceptional healthcare.
							</p>
						</div>
						<ButtonLink
							className="h-[55px] gap-[12.5px] rounded-[25px] px-[25px] py-[12.5px] text-lg font-bold tracking-[-0.18px]"
							data-node-id="7:1116"
							href="#contact"
						>
							Book Appointment
							<ArrowRightIcon className="h-[18.75px] w-[18.75px]" />
						</ButtonLink>
					</div>
				</div>
			</div>
		</SectionShell>
	);
}
