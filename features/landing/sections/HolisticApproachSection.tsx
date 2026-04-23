import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react/rsc';
import IconTile from '@/components/ui/IconTile';
import type { StoryblokLandingSectionProps } from '@/lib/storyblok/types';

type SpecialtyItem = {
	name: string;
	iconSrc: string;
	iconSize: number;
	nodeId: string;
	iconNodeId: string;
};

const specialtyItems: SpecialtyItem[] = [
	{
		name: 'Operational Optimization',
		iconSrc: '/icons/financial-report.svg',
		iconSize: 37,
		nodeId: '7:1159',
		iconNodeId: '7:1161',
	},
	{
		name: 'Financial Management',
		iconSrc: '/icons/seo-optimization.svg',
		iconSize: 35,
		nodeId: '7:1165',
		iconNodeId: '7:1167',
	},
	{
		name: 'Patient Scheduling',
		iconSrc: '/icons/doctor-scheduling.svg',
		iconSize: 40,
		nodeId: '7:1185',
		iconNodeId: '7:1187',
	},
	{
		name: 'Compliance Support',
		iconSrc: '/icons/compliance-support.svg',
		iconSize: 40,
		nodeId: '7:1199',
		iconNodeId: '7:1201',
	},
	{
		name: 'Staff Training',
		iconSrc: '/icons/staff-training.svg',
		iconSize: 41,
		nodeId: '7:1210',
		iconNodeId: '7:1212',
	},
	{
		name: 'Technology Integration',
		iconSrc: '/icons/technology-integration.svg',
		iconSize: 41,
		nodeId: '7:1245',
		iconNodeId: '7:1247',
	},
];

export default function HolisticApproachSection({
	blok,
}: StoryblokLandingSectionProps) {
	return (
		<section
			{...(blok ? storyblokEditable(blok) : {})}
			className="px-3 pb-4 md:px-4 md:pb-5"
			id="speciality"
		>
			<div
				className="rounded-section bg-brand-soft px-5 py-8 sm:px-8 sm:py-10 lg:px-[51px] lg:py-14"
				data-node-id="7:1150"
			>
				<div className="mx-auto w-full max-w-[1250px]" data-node-id="7:1151">
					<div
						className="max-w-[823px]"
						data-node-id="7:1152"
					>
						<h2
							className="max-w-[670px] font-(family-name:--font-brand) text-[2.25rem] leading-[44px] font-extrabold tracking-[-0.02em] text-brand-navy"
							data-node-id="7:1155"
						>
							End-to-End Practice Management with a Holistic Approach
						</h2>
						<p
							className="mt-4 max-w-[668px] text-base leading-[1.6] font-medium text-asklepios-gray-60"
							data-node-id="7:1156"
						>
							Our comprehensive practice management services are designed to
							handle every detail, ensuring your operations run smoothly and
							efficiently. From strategic planning to daily tasks, we cover all
							aspects to support your practice&apos;s success, including:
						</p>
					</div>

					<div
						className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,490px)_minmax(0,541px)] lg:items-center lg:justify-between"
						data-node-id="7:1157"
					>
						<div className="space-y-[21px]" data-node-id="7:1158">
							{specialtyItems.map((item, index) => {
								const isActive = index === 0;

								return (
									<div
										className={[
											'flex w-full items-center gap-[22px]',
											isActive
												? 'rounded-2xl bg-brand-blue p-3 text-brand-soft'
												: 'text-brand-navy',
										].join(' ')}
										data-node-id={item.nodeId}
										key={item.name}
									>
										<IconTile>
											<Image
												alt=""
												className="h-auto w-auto"
												data-node-id={item.iconNodeId}
												height={item.iconSize}
												src={item.iconSrc}
												width={item.iconSize}
											/>
										</IconTile>
										<span className="font-(family-name:--font-brand) text-2xl leading-8 font-bold tracking-[-0.01em]">
											{item.name}
										</span>
									</div>
								);
							})}
						</div>

						<div className="lg:pt-[3px]" data-node-id="7:1262">
							<p
								className="max-w-[541px] text-base leading-[1.6] font-medium text-asklepios-gray-60 sm:text-lg"
								data-node-id="7:1263"
							>
								Enhance efficiency with streamlined processes and workflows,
								reducing bottlenecks and improving overall practice productivity.
							</p>
							<div
								className="mt-8 overflow-hidden rounded-section sm:mt-[46px]"
								data-node-id="7:1264"
							>
								<Image
									alt="Doctor standing with a stethoscope in a clinic corridor."
									className="h-auto w-full"
									height={370}
									src="/pharmacy/holistic-doctor.png"
									width={541}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
