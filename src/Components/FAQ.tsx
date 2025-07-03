"use client";
import React, { useState } from "react";

const faqData = [
	{
		question: "What should I look for in Gradr platform?",
		answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.`,
	},
	{
		question: "Is Gradr free to use for students?",
		answer:
			"Yes, Gradr offers a free plan for students with access to essential features.",
	},
	{
		question: "What are the key features of Gradr?",
		answer:
			"Gradr provides AI-driven study tools, progress tracking, and smart quiz generation.",
	},
	{
		question: "Can I upload multiple files to Gradr AI to read?",
		answer:
			"Yes, you can upload multiple files in supported formats such as PDF, PPT, and DOCX.",
	},
	{
		question: "How can I see my progress on Gradr?",
		answer:
			"You can view your progress in the dashboard, which includes analytics and study statistics.",
	},
];

const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const handleToggle = (idx: number) => {
		setOpenIndex(idx === openIndex ? -1 : idx);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f8fa] py-10">
			<h2 className="text-3xl md:text-4xl text-[#090045] font-bold mb-8 text-center">
				Frequently Asked Questions
			</h2>
			<div className="w-full max-w-2xl space-y-5">
				{faqData.map((item, idx) => (
					<div
						key={idx}
						className={`rounded-2xl transition border ${
							idx === openIndex
								? "border-[#6938EF] bg-white shadow-md"
								: "border-transparent bg-white"
						} p-0`}>
						<button
							className={`w-full flex items-center justify-between px-6 py-5 focus:outline-none ${
								idx === openIndex
									? "font-bold text-[#2d2154]"
									: "font-semibold text-[#2d2154]"
							}`}
							onClick={() => handleToggle(idx)}>
							<span className="text-left text-base md:text-lg text-[#090045]">
								{item.question}
							</span>
							<span
								className={`ml-4 transition-transform duration-200 ${
									idx === openIndex ? "rotate-180" : "rotate-0"
								}`}>
								<svg
									width="24"
									height="24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7 10l5 5 5-5"
										stroke="#6938EF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</button>
						{idx === openIndex && (
							<div className="px-6 pb-6 pt-0 text-[#5a5a89] text-sm md:text-base animate-fade-in">
								{item.answer.split("\n").map((line, i) => (
									<p
										key={i}
										className="mb-2 last:mb-0 text-[#090045]">
										{line}
									</p>
								))}
							</div>
						)}
					</div>
				))}
			</div>
			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(-8px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fade-in 0.3s ease;
				}
			`}</style>
		</div>
	);
};

export default FAQ;
