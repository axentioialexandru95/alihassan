import Image from 'next/image';
import { services } from '../data';
import { ArrowRightIcon } from '../icons';

export default function ServicesSection() {
	return (
		<section className="px-3 pb-4 md:px-4 md:pb-5" id="services">
			<div className="rounded-[32px] bg-brand-navy px-5 py-8 text-white sm:px-7 sm:py-10 lg:px-10 lg:py-11">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
					<div>
						<h2 className="max-w-[14ch] font-(family-name:--font-brand) text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.06em] text-white sm:text-[3.1rem]">
							Professional Practice Management Services for Enhanced Efficiency
						</h2>
						<p className="mt-4 max-w-[60ch] text-[15px] leading-8 text-white/76">
							Elevate your practice with our expert management services. From
							streamlined operations to optimized workflows, we enhance
							efficiency, allowing you to focus on delivering exceptional patient
							care while improving overall performance.
						</p>
						<div className="mt-8 divide-y divide-white/14 border-y border-white/14">
							{services.map((service, index) => (
								<div className="py-5 first:pt-6 last:pb-6" key={service.name}>
									{index === 0 ? (
										<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
											<div className="overflow-hidden rounded-[12px]">
												<Image
													alt="Team collaborating on operational changes."
													className="h-16 w-24 object-cover"
													height={58}
													src="/pharmacy/service-thumb.jpg"
													width={84}
												/>
											</div>
											<div>
												<h3 className="font-(family-name:--font-brand) text-[1.75rem] leading-none font-medium tracking-[-0.05em] text-[#3ad8c1]">
													{service.name}
												</h3>
												<p className="mt-2 text-sm text-white/72">
													{service.description}
												</p>
											</div>
										</div>
									) : (
										<h3 className="font-(family-name:--font-brand) text-[1.75rem] leading-none font-medium tracking-[-0.05em] text-white/56">
											{service.name}
										</h3>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="flex items-end lg:justify-end">
						<a
							className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_30px_rgba(0,112,250,0.24)] transition duration-200 ease-out hover:-translate-y-px"
							href="#contact"
						>
							Book Appointment
							<ArrowRightIcon className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
