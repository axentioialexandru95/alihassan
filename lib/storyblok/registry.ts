import Feature from '@/components/storyblok/Feature';
import Grid from '@/components/storyblok/Grid';
import Page from '@/components/storyblok/Page';
import Teaser from '@/components/storyblok/Teaser';
import BenefitsSection from '@/features/landing/sections/BenefitsSection';
import CtaSection from '@/features/landing/sections/CtaSection';
import FaqSection from '@/features/landing/sections/FaqSection';
import HeroSection from '@/features/landing/sections/HeroSection';
import HolisticApproachSection from '@/features/landing/sections/HolisticApproachSection';
import ProblemCardsSection from '@/features/landing/sections/ProblemCardsSection';
import ProcessSection from '@/features/landing/sections/ProcessSection';
import ServicesSection from '@/features/landing/sections/ServicesSection';
import SolutionsSection from '@/features/landing/sections/SolutionsSection';

export const storyblokComponents = {
	page: Page,
	landing_hero: HeroSection,
	landing_problem_cards: ProblemCardsSection,
	landing_solutions: SolutionsSection,
	landing_services: ServicesSection,
	landing_holistic_approach: HolisticApproachSection,
	landing_process: ProcessSection,
	landing_benefits: BenefitsSection,
	landing_cta: CtaSection,
	landing_faq: FaqSection,
	feature: Feature,
	grid: Grid,
	teaser: Teaser,
};
