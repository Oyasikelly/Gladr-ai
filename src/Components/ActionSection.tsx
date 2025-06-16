"use client";

import { colors } from "@/data/color";
import ActionCard1 from "../Components/ActionCard1";
import ActionCard2 from "../Components/ActionCard2";
import FadeScrollWrapper from "./FadeScrollWrapper";
import { motion } from "framer-motion";

function ActionSection() {
	return (
		<section
			id="actions"
			className="lg:px-40 my-10 w-full flex flex-col items-center">
			<div className="text-center w-[auto] lg:w-[673px]">
				<FadeScrollWrapper>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ duration: 1 }}
						style={{ color: colors.darker }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
						See Gladr in Action
					</motion.h1>
				</FadeScrollWrapper>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ delay: 0.2, duration: 1.2 }}
					className="text-auto md:text-[18px] mb-10 lg:mb-12">
					Discover our powerful features transform your study experience
				</motion.p>
			</div>
			<div className="flex flex-col gap-10">
				<ActionCard1 />
				<ActionCard2 />
			</div>
		</section>
	);
}

export default ActionSection;
