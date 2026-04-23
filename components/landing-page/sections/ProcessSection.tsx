import Image from 'next/image';
import { processSteps } from '../data';
import { ChevronDownIcon } from '../icons';

export default function ProcessSection() {
	return (
		<section className="px-3 pb-4 md:px-4 md:pb-5">
			<div className="px-2 pt-4 pb-2 sm:px-6 sm:pt-6">
				<h2 className="mx-auto max-w-[14ch] text-center font-(family-name:--font-brand) text-[2.2rem] leading-[1.05] font-semibold tracking-[-0.06em] text-brand-navy sm:text-[3rem]">
					Step-by-Step Guide to Our Practice Management Process
				</h2>
				<div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
					<div className="space-y-4">
						<div className="overflow-hidden rounded-[28px]">
							<Image
								alt="Healthcare logistics worker holding delivery parcels."
								className="h-auto w-full"
								height={200}
								src="/pharmacy/process-top.jpg"
								width={282}
							/>
						</div>
						<div className="overflow-hidden rounded-[28px]">
							<Image
								alt="Friendly care team guide holding a clipboard."
								className="h-auto w-full"
								height={224}
								src="/pharmacy/process-bottom.jpg"
								width={282}
							/>
						</div>
					</div>
					<div className="space-y-4">
						{processSteps.map((step) => (
							<details
								className={[
									'group overflow-hidden rounded-[24px] bg-brand-soft transition duration-200 ease-out',
									step.defaultOpen ? 'bg-[#90b6f4]' : 'bg-brand-soft',
								].join(' ')}
								key={step.id}
								open={step.defaultOpen}
							>
								<summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-brand-navy marker:content-none sm:px-6 sm:py-6">
									<div className="flex items-center gap-3">
										<span className="text-[2rem] leading-none tracking-[-0.06em]">
											{step.id}
										</span>
										<span className="text-brand-navy/35">|</span>
										<span className="text-[1.15rem] font-medium tracking-[-0.04em]">
											{step.title}
										</span>
									</div>
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-brand-navy/80 transition duration-200 group-open:rotate-180">
										<ChevronDownIcon className="h-4 w-4" />
									</span>
								</summary>
								<div className="px-5 pb-5 text-sm leading-7 text-brand-navy/82 sm:px-6 sm:pb-6">
									{step.description}
								</div>
							</details>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
