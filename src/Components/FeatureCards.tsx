"use client";

import { useEffect, useRef, useState } from "react";
import { colors } from "@/data/color";
import features from "../data/features.json";

function FeatureCard() {
	return (
		<>
			{features.map((feature, index) => (
				<AnimatedCard
					key={index}
					feature={feature}
					index={index}
				/>
			))}
		</>
	);
}

function AnimatedCard({ feature, index }: { feature: any; index: number }) {
	return (
		<div
			style={{
				background: `#${feature.color}`,
			}}
			className="w-[90%] lg:w-full p-6 rounded-xl shadow-md mx-1 md:mx-0 transition duration-300 md:hover:brightness-90 md:hover:-translate-y-2 active:scale-95">
			<h3
				style={{ color: colors.darker }}
				className="text-xl font-bold mb-3">
				{feature.title}
			</h3>

			<div className="my-4 lg:my-4">
				{feature.id !== 2 ? (
					<img
						src={feature.icon}
						alt={feature.title}
					/>
				) : (
					<div className="flex items-center">
						<img
							src={feature.icons?.tv}
							alt="tv icon"
						/>
						<img
							src={feature.icons?.star}
							alt="star icon"
							className="mt-1 -ml-1"
						/>
					</div>
				)}
			</div>

			<p
				className="text-[12px] md:text-base"
				style={{ color: colors.darker }}>
				{feature.description}
			</p>
		</div>
	);
}

export default FeatureCard;
