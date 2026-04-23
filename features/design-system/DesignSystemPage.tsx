import ColorTokensSection from './sections/ColorTokensSection';
import HeroSection from './sections/HeroSection';
import ReusablePatternsSection from './sections/ReusablePatternsSection';
import SpacingAndUsageSection from './sections/SpacingAndUsageSection';
import TypeScaleSection from './sections/TypeScaleSection';

export default function DesignSystemPage() {
	return (
		<main className="px-3 pb-3 md:px-4 md:pb-4">
			<HeroSection />
			<ColorTokensSection />
			<TypeScaleSection />
			<ReusablePatternsSection />
			<SpacingAndUsageSection />
		</main>
	);
}
