type SectionHeaderProps = {
	eyebrow: string;
	title: string;
	description: string;
	dark?: boolean;
};

export default function SectionHeader({
	eyebrow,
	title,
	description,
	dark = false,
}: SectionHeaderProps) {
	return (
		<div>
			<p
				className={[
					'text-xs font-semibold uppercase tracking-[0.28em]',
					dark ? 'text-[#3ad8c1]' : 'text-brand-blue',
				].join(' ')}
			>
				{eyebrow}
			</p>
			<h2
				className={[
					'mt-3 font-(family-name:--font-brand) text-[2.35rem] leading-[1.04] font-semibold tracking-[-0.06em] sm:text-[3rem]',
					dark ? 'text-white' : 'text-brand-navy',
				].join(' ')}
			>
				{title}
			</h2>
			<p
				className={[
					'mt-4 max-w-[62ch] text-[15px] leading-8',
					dark ? 'text-white/70' : 'text-brand-muted',
				].join(' ')}
			>
				{description}
			</p>
		</div>
	);
}
