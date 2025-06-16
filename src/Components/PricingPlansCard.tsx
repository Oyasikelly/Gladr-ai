// components/PricingPlans.tsx
import { colors } from "@/data/color";
import { plans } from "@/data/plansData";
import { FaTimes } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import AnimatedCard from "@/Components/AnimatedCard"
export default function PricingPlans() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10">
			{plans.map((plan, index) => {
				const isFreePlan = plan.title.toLowerCase().includes("free");

				const buttonClass = isFreePlan
					? "bg-transparent text-[#6938EF] border border-[#6938EF] hover:bg-[#6938EF]/10"
					: "bg-[#6938EF] text-white border border-[#6938EF] hover:bg-purple-700";

				return (
					<AnimatedCard
						key={plan.id}
						index={index}>
						<div
							key={index}
							className={`border-2 ${plan.borderColor} ${plan.bgColor} rounded-xl p-6 flex flex-col justify-between`}>
							<div>
								<div className="flex justify-center mb-4">
									<img
										src={plan.emoji}
										alt={`${plan.title} avatar`}
										className="w-16 h-16"
									/>
								</div>
								<h3
									style={{ color: colors.darker }}
									className="text-center text-lg font-semibold">
									{plan.title}
								</h3>
								<p className="text-center text-2xl font-bold mt-2">
									{plan.price}
								</p>
								<p className="text-center text-sm text-gray-600">{plan.note}</p>

								<ul className="mt-4 space-y-2 text-sm">
									{plan.features.map((item, i) => {
										const feature =
											typeof item === "string"
												? { text: item, included: true }
												: item;
										return (
											<li
												key={i}
												className="flex items-center gap-2">
												<span
													style={{
														color: colors.darker,
														background: colors.white,
													}}
													className="w-5 h-5 rounded-full flex justify-center items-center">
													{feature.included ? <GiCheckMark /> : <FaTimes />}
												</span>
												<span
													className={feature.included ? "" : "text-gray-400"}>
													{feature.text}
												</span>
											</li>
										);
									})}
								</ul>
							</div>

							<button
								className={`mt-6 py-2 px-4 rounded-xl transition w-full ${buttonClass}`}>
								{plan.button}
							</button>
						</div>
					</AnimatedCard>
				);
			})}
		</div>
	);
}
