import SectionHeader from '../components/SectionHeader';
import { componentRules, spacingTokens } from '../data';

export default function SpacingAndUsageSection() {
	return (
		<section className="mt-4 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
			<div className="rounded-[32px] bg-white px-5 py-7 sm:px-7">
				<SectionHeader
					eyebrow="Spacing"
					title="Layout Rules"
					description="The system uses big rounded panels with small, steady gaps. This keeps the page soft without making it feel loose."
				/>
				<div className="mt-6 space-y-3">
					{spacingTokens.map((token) => (
						<div
							className="grid gap-3 rounded-[18px] bg-brand-soft p-4 sm:grid-cols-[130px_110px_minmax(0,1fr)]"
							key={token.name}
						>
							<strong className="text-brand-navy">{token.name}</strong>
							<span className="font-mono text-sm text-brand-blue">
								{token.value}
							</span>
							<span className="text-sm leading-6 text-brand-muted">
								{token.usage}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className="rounded-[32px] bg-brand-navy px-5 py-7 text-white sm:px-7">
				<SectionHeader
					dark
					eyebrow="Usage"
					title="Rules Before New Components"
					description="Use this checklist when adding sections so the page keeps one coherent visual language."
				/>
				<div className="mt-7 grid gap-4 sm:grid-cols-2">
					{componentRules.map((rule) => (
						<article
							className="rounded-[22px] border border-white/12 bg-white/8 p-5"
							key={rule.title}
						>
							<h3 className="text-[1.25rem] font-semibold tracking-[-0.05em] text-[#3ad8c1]">
								{rule.title}
							</h3>
							<p className="mt-3 text-sm leading-7 text-white/70">
								{rule.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
