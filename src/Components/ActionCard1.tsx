"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { colors } from "@/data/color";

const action1Data = [
	{
		smallTitle: "Support for PDF, PPT, DOCX formats",
		biggerTitle: "Upload Any Study Material",
		description:
			"  Drag and drop PDFs, PowerPoint presentations. Our advanced AI processes any format and extracts key information to create your personalized study environment.",
		image: "/assets/upload-study-material.png",
		color: "#CAC0FF",
	},
	{
		smallTitle: "Task complete percentage for each task",
		biggerTitle: "Interactive Document Chat",
		description:
			"  Have natural conversations with your study materials. Ask questions, request explanations, and get instant clarifications. It's like having a personal tutor who knows your content inside out.",
		image: "/assets/interactive-document-chat.png",
		color: "#FFE6A3",
	},
];

function AnimatedActionCard({ action, index }: { action: any; index: number }) {
	const ref = useRef(null);
	const controls = useAnimation();
	const inView = useInView(ref, { amount: 0.5 });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, scale: 0.95, y: 20 },
				visible: {
					opacity: 1,
					scale: [1, 1.08, 1],
					y: 0,
					transition: {
						duration: 1.2,
						ease: "easeInOut",
						delay: index * 0.2,
					},
				},
			}}
			style={{ background: `${action.color}` }}
			className="w-[90%] lg:w-full p-6 rounded-xl shadow-md mx-1 md:mx-0 transition duration-300 md:hover:brightness-90 md:hover:-translate-y-2 active:scale-95">
			<div>
				<p className="bg-white w-fit rounded-full my-4 text-[12px] lg:text-base py-1 px-4">
					{action.smallTitle}
				</p>
				<h2
					style={{ color: colors.darker }}
					className="text-xl lg:text-2xl font-bold mb-3">
					{action.biggerTitle}
				</h2>
				<p
					className="text-[12px] md:text-base"
					style={{ color: colors.darker }}>
					{action.description}
				</p>
			</div>

			<div className="mt-8 flex flex-col justify-center items-center">
				<img
					src={`${action.image}`}
					alt={`${action.biggerTitle}`}
					className="w-full"
				/>
			</div>
		</motion.div>
	);
}

export default function ActionCard1() {
	return (
		<div className="grid grid-col md:grid-cols-2 gap-4 justify-items-center">
			{action1Data.map((action, index) => (
				<AnimatedActionCard
					key={index}
					action={action}
					index={index}
				/>
			))}
		</div>
	);
}
