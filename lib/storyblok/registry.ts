import Feature from '@/components/storyblok/Feature';
import Grid from '@/components/storyblok/Grid';
import {
	BenefitsBlock,
	CtaBlock,
	FaqBlock,
	HeroBlock,
	HolisticApproachBlock,
	ProblemCardsBlock,
	ProcessBlock,
	ServicesBlock,
	SolutionsBlock,
} from '@/components/storyblok/SectionBlocks';
import Page from '@/components/storyblok/Page';
import Teaser from '@/components/storyblok/Teaser';

export const storyblokComponents = {
	page: Page,
	hero: HeroBlock,
	problem_cards: ProblemCardsBlock,
	solutions: SolutionsBlock,
	services: ServicesBlock,
	holistic_approach: HolisticApproachBlock,
	process: ProcessBlock,
	benefits: BenefitsBlock,
	cta: CtaBlock,
	faq: FaqBlock,
	feature: Feature,
	grid: Grid,
	teaser: Teaser,
};
