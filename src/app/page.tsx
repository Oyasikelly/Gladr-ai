import HeroSection from "@/Components/HeroSection";

import FeaturesSection from "@/Components/FeaturesSection";
import ActionSection from "@/Components/ActionSection";
import HowItWorks from "@/Components/HowItWorks";
import PricingPlans from "@/Components/PriciningPlans";
import GladrApp from "@/Components/GladrApp";

export default function Home() {
	return (
		<div className="min-h-screen">
			<HeroSection />

			<FeaturesSection />
			<div className="w-full my-4 lg:my-8 flex flex-col justify-center items-center">
				<img
					src="/assets/line-arrow.svg"
					alt="line arrow"
					className="w-[100px] lg:w-[126px]"
				/>
			</div>
			<ActionSection />
			<HowItWorks />
			<PricingPlans />
			<GladrApp />
		</div>
	);
}
