import SectionHeader from '../components/SectionHeader';
import { typeScale } from '../data';

export default function TypeScaleSection() {
	return (
		<section className="mt-4 rounded-[32px] bg-white px-5 py-7 sm:px-7 sm:py-8 lg:px-9">
			<SectionHeader
				eyebrow="Typography"
				title="Type Scale"
				description="Rebond Grotesque carries the brand, display, and title voice. Plus Jakarta Sans handles readable body copy and UI labels."
			/>
			<div className="mt-7 space-y-4">
				{typeScale.map((item) => (
					<article
						className="rounded-[24px] border border-brand-navy/10 bg-brand-soft p-5 sm:p-6"
						key={item.name}
					>
						<div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
							<h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
								{item.name}
							</h3>
							<p className="text-sm text-brand-muted">{item.meta}</p>
						</div>
						<p className={item.className}>{item.sample}</p>
					</article>
				))}
			</div>
		</section>
	);
}
