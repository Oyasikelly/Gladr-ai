"use client";
import { colors } from "@/data/color";
import FeatureCard from "./FeatureCards";
import FadeScrollWrapper from "./FadeScrollWrapper";
import { motion } from "framer-motion";

function FeaturesSection() {
	return (
		<section
			id="features"
			className="lg:px-40 mt-10 w-full flex flex-col items-center">
			<div className="text-center w-[auto] lg:w-[673px]">
				<FadeScrollWrapper>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ duration: 1 }}>
						<span
							style={{ color: colors.darker }}
							className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							Yes,{" "}
							<span className="bg-gradient-to-r from-[#FF2E2E] via-[#EE7B16] via-[#8A43E1] to-[#D510FC] bg-clip-text text-transparent">
								Gladr is Everything
							</span>{" "}
							You Need To Excel
						</span>
					</motion.h1>
				</FadeScrollWrapper>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ delay: 0.2, duration: 1.2 }}
					className="text-auto md:text-[18px] mb-10 lg:mb-12">
					Powerful AI-driven features designed to accelerate your learning
					journey
				</motion.p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-center">
				<FeatureCard />
			</div>
		</section>
	);
}

export default FeaturesSection;
