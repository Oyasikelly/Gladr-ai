"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { colors } from "@/data/color";

const howItWorks = [
	{
		title: "Upload Your Material",
		content:
			"Simply upload any PDF, PowerPoint. Our AI will analyze and process your content instantly.",
	},
	{
		title: "Choose Your Study Mode",
		content:
			"Chat with your documents for interactive learning or generate custom quizzes with your preferred question types and difficulty.",
	},
	{
		title: "Learn & Track Progress",
		content:
			"Take timed assessments, review your performance, and watch your knowledge grow with detailed progress tracking.",
	},
];

function AnimatedWorkCard({
	title,
	content,
	index,
}: {
	title: string;
	content: string;
	index: number;
}) {
	const ref = useRef(null);
	const controls = useAnimation();

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.8, y: 50 }}
			animate={controls}
			whileInView={{
				opacity: 1,
				scale: 1,
				y: 0,
				transition: { duration: 0.6, ease: "easeOut" },
			}}
			className="w-full bg-[#FFFFFF1A] rounded-xl flex flex-col items-center my-[15px]">
			<div className="w-[90%] mt-[15px] lg:w-[356px] h-[4px] bg-[#64A7FA]"></div>
			<div className="w-[241px] my-[10px]">
				<h2
					style={{ color: colors.white }}
					className="font-[700] text-xl lg:text-2xl font-bold mt-4 mb-3">
					{title}
				</h2>
				<p
					style={{ color: colors.white }}
					className="font-[400] text-[18px]">
					{content}
				</p>
			</div>
		</motion.div>
	);
}

export default function HowItWorks() {
	return (
		<section
			id="how-it-works"
			style={{
				background: `linear-gradient(0deg, #050F2F, #050F2F), radial-gradient(33.54% 24.74% at 62.35% 41.3%, rgba(146, 38, 88, 0.5) 0%, rgba(155, 35, 91, 0.18) 55.5%, rgba(155, 35, 91, 0) 100%), radial-gradient(39.8% 32.49% at 44.14% 31.58%, rgba(32, 96, 221, 0.5) 0%, rgba(5, 41, 161, 0.086) 79.98%, rgba(3, 40, 156, 0) 97.4%)
`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			className="relative lg:px-40 h-auto lg:h-[567px] text-center flex flex-col items-center">
			<div className="flex w-full absolute inset-0 z-10 top-20 w-fit h-fit pr-2 justify-between items-center mb-4">
				<img
					src="/assets/zig-zag.svg"
					alt="Learn Smartly"
					className="w-14 md:w-20"
				/>
				<img
					src="/assets/orange-star.svg"
					alt="lightning icon"
					className="w-8 lg:w-20 mr-3"
				/>
			</div>

			<h1
				className="text-3xl md:text-4xl lg:text-5xl font-bold pt-10 md:pt-20"
				style={{ color: colors.white }}>
				How Gladr Works
			</h1>

			<div className="w-[90%] lg:w-full mt-10 grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
				{howItWorks.map((data, index) => (
					<AnimatedWorkCard
						key={index}
						title={data.title}
						content={data.content}
						index={index}
					/>
				))}
			</div>

			<div className="absolute bottom-0 right-0 lg:bottom-0 z-10 flex justify-between items-center w-fit h-fit">
				<img
					src="/assets/spring.svg"
					alt="spring icon"
					className="w-16 lg:w-30 mr-3"
				/>
			</div>
		</section>
	);
}
