export default function CtaSection() {
	return (
		<section className="px-3 pb-4 md:px-4 md:pb-5">
			<div className="relative overflow-hidden rounded-[28px] bg-brand-blue px-6 py-10 text-white sm:px-9 sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-14">
				<div className="pointer-events-none absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[34px] border-white/8" />
				<div className="pointer-events-none absolute right-[8%] top-[18%] h-24 w-24 rounded-full bg-white/6 blur-2xl" />
				<div className="relative z-10 max-w-[28rem]">
					<div className="text-6xl leading-none text-white/32">&quot;</div>
					<h2 className="mt-2 font-(family-name:--font-brand) text-[2.35rem] leading-[1.02] font-semibold tracking-[-0.06em] text-white sm:text-[3.1rem]">
						Make Medical Billing Effortless Today
					</h2>
					<p className="mt-4 text-[15px] leading-8 text-white/82">
						Contact us or sign up for our medical billing services now.
					</p>
				</div>
				<a
					className="relative z-10 mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy no-underline shadow-[0_14px_30px_rgba(7,28,87,0.14)] transition duration-200 ease-out hover:-translate-y-px lg:mt-0"
					href="#contact"
				>
					Get Started Today!
				</a>
			</div>
		</section>
	);
}
