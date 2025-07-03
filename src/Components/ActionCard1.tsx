"use client";

import { useEffect, useRef, useState } from "react";
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
	return (
		<div
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
		</div>
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
