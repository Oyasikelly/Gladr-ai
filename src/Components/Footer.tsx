"use client";

import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedSection({
	children,
	delay,
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.2 });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					delay: delay || 0,
					ease: "easeOut",
				},
			});
		}
	}, [inView]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={controls}>
			{children}
		</motion.div>
	);
}

export default function Footer() {
	return (
		<footer className="bg-[#040404] text-white px-6 md:px-20 py-14 overflow-hidden">
			<div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 w-full">
				{/* Left Section */}
				<AnimatedSection delay={0}>
					<div className="w-full md:w-auto">
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 h-8 rounded-full flex justify-center items-center">
								<img
									src="/assets/gladr.svg"
									alt="Gladr Logo"
								/>
							</div>
							<h2 className="text-lg font-semibold">Gradr</h2>
						</div>

						<div className="flex gap-3 mb-4 flex-wrap">
							<img
								src="/assets/bg-dark-google.svg"
								alt="Google Play"
								className="w-[120px]"
							/>
							<img
								src="/assets/bg-dark-appstore.svg"
								alt="App Store"
								className="w-[120px]"
							/>
						</div>

						<div className="flex gap-4 text-sm mb-4">
							{[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
								(Icon, i) => (
									<motion.div
										key={i}
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}
										animate={{
											scale: [1, 1.05, 1],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay: i * 0.4,
										}}
										className="w-8 h-8 rounded-full flex justify-center items-center  hover:text-white hover:bg-[#4319BC] transition">
										<Icon />
									</motion.div>
								)
							)}
						</div>

						<p className="text-sm text-gray-400">
							© Copyright 2025 Gradr. All rights reserved.
						</p>
					</div>
				</AnimatedSection>

				{/* Right Section */}
				<AnimatedSection delay={0.2}>
					<div className="flex flex-wrap md:flex-nowrap gap-x-16 gap-y-6 text-sm w-full md:w-auto">
						<div className="flex flex-col gap-2 min-w-[120px]">
							{["Home", "Features", "How it works"].map((text, i) => (
								<motion.a
									key={i}
									whileHover={{ x: 5 }}
									href="#"
									className="hover:text-gray-300 transition">
									{text}
								</motion.a>
							))}
						</div>
						<div className="flex flex-col justify-end gap-2 min-w-[120px]">
							{["Pricing", "Contact us"].map((text, i) => (
								<motion.a
									key={i}
									whileHover={{ x: 5 }}
									href="#"
									className="hover:text-gray-300 transition">
									{text}
								</motion.a>
							))}
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center gap-12 text-gray-500 min-w-[120px] mt-4 md:mt-16">
						{["Privacy Policy", "Terms & Conditions"].map((text, i) => (
							<motion.a
								key={i}
								whileHover={{ x: 5 }}
								href="#"
								className="text-[#797777] hover:text-gray-300 transition">
								{text}
							</motion.a>
						))}
					</div>
				</AnimatedSection>
			</div>
		</footer>
	);
}
