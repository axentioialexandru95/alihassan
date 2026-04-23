import { storyblokEditable } from '@storyblok/react/rsc';
import type { SbBlokData } from '@storyblok/react/rsc';
import type { ReactNode } from 'react';
import BenefitsSection from '@/features/landing/sections/BenefitsSection';
import CtaSection from '@/features/landing/sections/CtaSection';
import FaqSection from '@/features/landing/sections/FaqSection';
import HeroSection from '@/features/landing/sections/HeroSection';
import HolisticApproachSection from '@/features/landing/sections/HolisticApproachSection';
import ProblemCardsSection from '@/features/landing/sections/ProblemCardsSection';
import ProcessSection from '@/features/landing/sections/ProcessSection';
import ServicesSection from '@/features/landing/sections/ServicesSection';
import SolutionsSection from '@/features/landing/sections/SolutionsSection';
import type { StoryblokHeroBlok } from '@/lib/storyblok/types';

type SectionBlockProps<TBlok extends SbBlokData = SbBlokData> = {
	blok: TBlok;
};

type EditableSectionBlockProps = SectionBlockProps & {
	children: ReactNode;
};

function EditableSectionBlock({ blok, children }: EditableSectionBlockProps) {
	return <div {...storyblokEditable(blok)}>{children}</div>;
}

export function HeroBlock({ blok }: SectionBlockProps<StoryblokHeroBlok>) {
	return (
		<EditableSectionBlock blok={blok}>
			<HeroSection
				subtitle={blok.subtitle || blok.Subtitle}
				title={blok.title || blok.Title}
			/>
		</EditableSectionBlock>
	);
}

export function ProblemCardsBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<ProblemCardsSection />
		</EditableSectionBlock>
	);
}

export function SolutionsBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<SolutionsSection />
		</EditableSectionBlock>
	);
}

export function ServicesBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<ServicesSection />
		</EditableSectionBlock>
	);
}

export function HolisticApproachBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<HolisticApproachSection />
		</EditableSectionBlock>
	);
}

export function ProcessBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<ProcessSection />
		</EditableSectionBlock>
	);
}

export function BenefitsBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<BenefitsSection />
		</EditableSectionBlock>
	);
}

export function CtaBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<CtaSection />
		</EditableSectionBlock>
	);
}

export function FaqBlock({ blok }: SectionBlockProps) {
	return (
		<EditableSectionBlock blok={blok}>
			<FaqSection />
		</EditableSectionBlock>
	);
}
