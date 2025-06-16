import { colors } from "@/data/color";
import PricingPlansCard from "@/Components/PricingPlansCard";
function PricingPlans() {
	return (
		<section
			id="actions"
			className="lg:px-40 my-10 w-full flex flex-col items-center">
			<div className="text-center w-[auto]">
				<h1
					style={{ color: colors.darker }}
					className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
					Chose a plan that works for you!
				</h1>
				<p className="text-auto md:text-[18px] mb-10 lg:mb-12">
					Select the right plan for your need
				</p>
			</div>
			<div className="flex flex-col gap-10">
				<PricingPlansCard />
			</div>
		</section>
	);
}

export default PricingPlans;
