import SectionHeader from '../components/SectionHeader';
import { colorTokens } from '../data';

export default function ColorTokensSection() {
	return (
		<section className="mt-4 rounded-[32px] bg-brand-soft px-5 py-7 sm:px-7 sm:py-8 lg:px-9">
			<SectionHeader
				eyebrow="Foundations"
				title="Color Tokens"
				description="These are the colors used by the Figma page and the implementation. Use the semantic role first, not just the hex value."
			/>
			<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{colorTokens.map((token) => (
					<article
						className="overflow-hidden rounded-[24px] border border-brand-navy/8 bg-white"
						key={token.name}
					>
						<div
							className={[
								'flex min-h-[150px] items-end p-5',
								token.text === 'light' ? 'text-white' : 'text-brand-navy',
							].join(' ')}
							style={{ backgroundColor: token.value }}
						>
							<p className="text-2xl font-semibold tracking-[-0.06em]">
								{token.value}
							</p>
						</div>
						<div className="p-5">
							<h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-brand-navy">
								{token.name}
							</h3>
							<p className="mt-1 font-mono text-xs text-brand-blue">
								{token.token}
							</p>
							<p className="mt-2 text-sm leading-7 text-brand-muted">
								{token.usage}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
