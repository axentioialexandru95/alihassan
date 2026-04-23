import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonLink from '@/components/ui/ButtonLink';
import type { StoryblokLandingSectionProps } from '@/lib/storyblok/types';
import { services } from '../data';

export default function ServicesSection({ blok }: StoryblokLandingSectionProps) {
	return (
		<section
			{...(blok ? storyblokEditable(blok) : {})}
			className="px-3 pb-4 md:px-4 md:pb-5"
			id="services"
		>
			<div
				className="relative mx-auto max-w-[1390px] rounded-[24px] bg-brand-navy px-6 py-8 text-white sm:px-10 sm:py-12 lg:min-h-[900px] lg:px-[67px] lg:py-[60px] xl:min-h-[1091px]"
				data-node-id="7:1120"
			>
				<div className="max-w-[923px]" data-node-id="7:1124">
					<h2
						className="max-w-[923px] font-(family-name:--font-brand) text-[2.5rem] leading-[1.12] font-extrabold tracking-[-0.96px] text-white sm:text-[3rem] sm:leading-[1.2]"
						data-node-id="7:1125"
					>
						Professional Practice Management Services for Enhanced Efficiency
					</h2>
					<p
						className="mt-4 max-w-[890px] text-base leading-[1.6] font-medium text-brand-soft sm:text-lg"
						data-node-id="7:1126"
					>
						Elevate your practice with our expert management services. From
						streamlined operations to optimized workflows, we enhance efficiency,
						allowing you to focus on delivering exceptional patient care while
						improving overall performance.
					</p>
				</div>

				<div
					className="mt-10 flex max-w-[732px] flex-col gap-[25px] border-b border-brand-border-cool/50 pb-[25px] lg:mt-10"
					data-node-id="7:1127"
				>
					{services.map((service, index) => (
						<ServiceRow
							description={service.description}
							isActive={index === 0}
							key={service.name}
							name={service.name}
						/>
					))}
				</div>

				<ButtonLink
					className="mt-10 h-[55px] gap-4 rounded-[49px] px-8 text-lg font-bold tracking-[-0.18px] hover:bg-[#0567e8] lg:absolute lg:right-[56px] lg:bottom-[73px] lg:mt-0"
					data-node-id="7:1149"
					href="#contact"
				>
					<span>Book Appointment</span>
					<BookButtonAddIcon />
				</ButtonLink>
			</div>
		</section>
	);
}

type ServiceRowProps = {
	name: string;
	description?: string;
	isActive: boolean;
};

function ServiceRow({ name, description, isActive }: ServiceRowProps) {
	if (isActive) {
		return (
			<div className="flex flex-col gap-[19px] sm:flex-row sm:items-center">
				<Image
					alt="Medical team reviewing practice operations."
					className="h-[120px] w-[155px] rounded-[20px] object-cover"
					height={120}
					src="/pharmacy/service-review-thumb.png"
					width={155}
				/>
				<div className="pb-0 sm:pb-2.5">
					<h3 className="font-(family-name:--font-brand) text-[2rem] leading-[1.2] font-medium tracking-[-0.72px] text-brand-mint sm:text-[2.25rem] sm:leading-[56px]">
						{name}
					</h3>
					<p className="text-base leading-[1.6] tracking-[-0.36px] text-brand-service-copy sm:text-lg">
						{description}
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="border-t border-brand-border-cool/50 pt-[26px] first:border-t-0">
			<h3 className="font-(family-name:--font-brand) text-[2rem] leading-[1.2] font-medium tracking-[-0.72px] whitespace-nowrap text-white/50 sm:text-[2.25rem] sm:leading-[56px]">
				{name}
			</h3>
		</div>
	);
}

function BookButtonAddIcon() {
	return (
		<span
			aria-hidden="true"
			className="h-6 w-6 shrink-0"
			style={{
				backgroundColor: 'white',
				mask: "url('/icons/plus.svg') center / contain no-repeat",
				WebkitMask: "url('/icons/plus.svg') center / contain no-repeat",
			}}
		/>
	);
}
