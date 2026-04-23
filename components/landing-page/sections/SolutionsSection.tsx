import Image from 'next/image';
import { ArrowRightIcon } from '../icons';

export default function SolutionsSection() {
	return (
		<section className="px-3 pb-4 md:px-4 md:pb-5" id="about">
			<div className="rounded-[32px] bg-brand-soft px-5 py-7 sm:px-7 sm:py-8 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:items-center lg:gap-10">
				<div className="overflow-hidden rounded-[24px]">
					<Image
						alt="Medical team reviewing practice operations."
						className="h-auto w-full"
						height={278}
						src="/pharmacy/solutions-team.jpg"
						width={278}
					/>
				</div>
				<div className="mt-6 lg:mt-0">
					<div className="inline-flex rounded-[10px] border border-brand-navy/20 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-brand-navy">
						SOLUTIONS
					</div>
					<h2 className="mt-5 max-w-[18ch] font-(family-name:--font-brand) text-[2.1rem] leading-[1.22] font-extrabold tracking-[-0.02em] text-brand-navy sm:text-[2.7rem]">
						Transform Your Practice with Our All-Inclusive Management Solutions
					</h2>
					<p className="mt-5 max-w-[62ch] text-[15px] leading-8 text-brand-muted">
						True Care Medical Billing offers a robust practice management
						solution designed to address these challenges and optimize your
						practice operations. Our services streamline workflows, improve
						financial management, and enhance patient care, allowing you to focus
						on what matters most, providing exceptional healthcare.
					</p>
					<a
						className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_34px_rgba(0,112,250,0.24)] transition duration-200 ease-out hover:-translate-y-px hover:shadow-[0_20px_40px_rgba(0,112,250,0.3)]"
						href="#contact"
					>
						Book Appointment
						<ArrowRightIcon className="h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	);
}
