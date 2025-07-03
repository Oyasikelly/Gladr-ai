"use client";

import { useEffect, useRef, useState } from "react";
import { colors } from "@/data/color";

const action2Data = [
	{
		smallTitle: "Support for PDF, PPT, DOCX formats",
		biggerTitle: "Smart Quiz Generation",
		description:
			"Transform any document into personalized quizzes. Choose from multiple choice, flashcards, true/false, or mixed question types. Set difficulty levels and question counts to match your learning goals.",
		image: "/assets/smart-quiz-generation.png",
		color: "#CAC0FF",
		id: 1,
	},
	{
		smallTitle: "Support for PDF, PPT, DOCX formats",
		biggerTitle: "Smart Progress Tracking",
		description:
			"Monitor your learning journey with detailed analytics. Track study time, quiz performance, improvement trends, and identify areas that need more attention. Data-driven insights to optimize your learning.",
		image: "/assets/stat-progress.png",
		color: "#FFE6A3",
		id: 2,
	},
];

function AnimatedCard({ action, index }: { action: any; index: number }) {
	return (
		<div
			style={{ background: `${action.color}` }}
			className="grid grid-col md:grid-cols-2 justify-items-center w-[90%] lg:w-full p-6 rounded-xl shadow-md mx-1 md:mx-0 transition duration-300">
			{action.id === 1 ? (
				<>
					<div className="w-full lg:w-[500px]">
						<p className="bg-white rounded-full my-4 text-[12px] lg:text-base py-1 px-4">
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
						<button
							style={{ background: colors.darker, color: colors.white }}
							className="w-fit py-2 px-4 rounded-full mt-4">
							Get started
						</button>
					</div>
					<div className="py-8 flex flex-col justify-center items-center">
						<img
							src={action.image}
							alt={action.biggerTitle}
							className="w-full"
						/>
					</div>
				</>
			) : (
				<>
					<div className="py-8 flex flex-col justify-center items-center">
						<img
							src={action.image}
							alt={action.biggerTitle}
							className="w-full"
						/>
					</div>
					<div className="w-full lg:w-[500px]">
						<p className="bg-white rounded-full my-4 text-[12px] lg:text-base py-1 px-4">
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
						<button
							style={{ background: colors.darker, color: colors.white }}
							className="w-fit py-2 px-4 rounded-full mt-4 transition duration-300 hover:brightness-70 hover:scale-105 active:scale-100 active:brightness-90">
							Get started
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default function ActionCard2() {
	return (
		<div className="flex flex-col gap-10 justify-center items-center">
			{action2Data.map((action, index) => (
				<AnimatedCard
					key={index}
					action={action}
					index={index}
				/>
			))}
		</div>
	);
}
