import BenefitsSection from './sections/BenefitsSection';
import CtaSection from './sections/CtaSection';
import FaqSection from './sections/FaqSection';
import HeroSection from './sections/HeroSection';
import HolisticApproachSection from './sections/HolisticApproachSection';
import ProblemCardsSection from './sections/ProblemCardsSection';
import ProcessSection from './sections/ProcessSection';
import ServicesSection from './sections/ServicesSection';
import SolutionsSection from './sections/SolutionsSection';

export default function LandingPage() {
	return (
		<main className="pb-3 md:pb-4">
			<HeroSection />
			<ProblemCardsSection />
			<SolutionsSection />
			<ServicesSection />
			<HolisticApproachSection />
			<ProcessSection />
			<BenefitsSection />
			<CtaSection />
			<FaqSection />
		</main>
	);
}
