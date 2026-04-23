export default function HeroSection() {
	return (
		<section className="relative overflow-hidden rounded-[32px] bg-brand-navy px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
			<div className="pointer-events-none absolute right-[-8rem] top-[-9rem] h-96 w-96 rounded-full border-[42px] border-white/6" />
			<div className="pointer-events-none absolute bottom-[-7rem] left-[42%] h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
			<div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
				<div>
					<p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#3ad8c1]">
						Design System
					</p>
					<h1 className="mt-6 max-w-[11ch] font-(family-name:--font-brand) text-[3.8rem] leading-[0.9] font-semibold tracking-[-0.08em] text-white sm:text-[6.6rem]">
						Alihassan UX
					</h1>
					<p className="mt-6 max-w-[58ch] text-[15px] leading-8 text-white/76">
						A practical implementation guide for the pharmacy landing page:
						color tokens, type rules, spacing, core components, and the
						interaction patterns that keep the interface consistent.
					</p>
				</div>
				<div className="rounded-[28px] border border-white/12 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
					<div className="relative inline-flex w-fit font-(family-name:--font-brand) text-[2.1rem] leading-none font-bold tracking-[-0.08em] text-white">
						<span>ALIHASSAN</span>
						<span className="absolute -top-2 -right-4 text-[0.9rem] font-bold tracking-[-0.05em] text-brand-blue">
							UX
						</span>
					</div>
					<div className="mt-8 grid grid-cols-2 gap-3">
						<div className="rounded-[20px] bg-brand-blue p-5 text-white">
							<p className="text-xs uppercase tracking-[0.22em] text-white/68">
								Primary
							</p>
							<p className="mt-7 text-2xl font-semibold tracking-[-0.05em]">
								#0070FA
							</p>
						</div>
						<div className="rounded-[20px] bg-[#f3d0dd] p-5 text-brand-navy">
							<p className="text-xs uppercase tracking-[0.22em] text-brand-navy/54">
								CTA Accent
							</p>
							<p className="mt-7 text-2xl font-semibold tracking-[-0.05em]">
								Pink
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
