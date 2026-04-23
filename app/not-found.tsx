import ButtonLink from '@/components/ui/ButtonLink';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';

export default function NotFound() {
	return (
		<main>
			<SectionShell>
				<div className="rounded-section bg-brand-soft px-6 py-16 text-center sm:px-8">
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue">
						404
					</p>
					<SectionHeading
						align="center"
						as="h1"
						className="mt-4 max-w-[12ch] text-[3rem] leading-[1] font-extrabold tracking-[-0.06em] sm:text-[4.5rem]"
					>
						Page not found
					</SectionHeading>
					<p className="mx-auto mt-5 max-w-[48ch] text-base leading-8 text-brand-muted">
						The page you are looking for is not available or has not been
						published yet.
					</p>
					<ButtonLink
						className="mt-8 h-[55px] px-7 text-base font-bold"
						href="/"
					>
						Back to home
					</ButtonLink>
				</div>
			</SectionShell>
		</main>
	);
}
