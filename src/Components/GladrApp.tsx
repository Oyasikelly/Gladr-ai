"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { colors } from "@/data/color";

function AnimatedGladrCard({
	children,
	index,
}: {
	children: React.ReactNode;
	index: number;
}) {
	const ref = useRef(null);
	const controls = useAnimation();
	const isInView = useInView(ref, { amount: 0.4 });

	useEffect(() => {
		if (isInView) {
			controls.start({
				scale: [1, 1.03, 1],
				transition: {
					repeat: Infinity,
					repeatType: "reverse",
					duration: 2.5,
					delay: index * 0.4,
					ease: "easeInOut",
				},
			});
		} else {
			controls.stop();
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{
				opacity: 1,
				scale: 1,
				transition: { duration: 0.7, delay: index * 0.2, ease: "easeOut" },
			}}
			animate={controls}>
			{children}
		</motion.div>
	);
}

export default function GladrApp() {
	return (
		<section className="relative lg:px-40 py-8 md:py-15 h-auto max-w-full flex flex-col justify-center items-center">
			<div className="relative bg-[#4319BC] grid grid-cols-1 md:grid-cols-2 justify-center items-center max-w-[1104px] lg:w-full pt-6 rounded-xl mx-1 md:mx-0 shadow-[2rem_-2rem_0_#B884FC]">
				<div className="absolute top-0 inset-0 z-10">
					<img
						src="/assets/background-zig-zag.png"
						alt="background"
						className="w-full h-full object-contain"
					/>
				</div>

				<div className="w-full lg:w-[500px] relative z-20 pl-14 ">
					<div className="flex flex-col justify-center md:items-center md:justify-start md:items-start ">
						<h2
							style={{ color: colors.white }}
							className="text-xl lg:text-2xl font-bold mb-3">
							Ready to Revolutionalize Your Study Routine?
						</h2>
						<p
							className="text-[12px] md:text-base max-w-[60%] md:max-w-full"
							style={{ color: colors.white, opacity: 0.8 }}>
							Join thousands of students who are already learning smart with
							Gladr. Gladr makes studying smarter, not harder.
						</p>
					</div>
					<div className="flex items-center gap-4 w-fit py-2 rounded-full mt-4">
						<div>
							<img
								src="/assets/bg-white-google.svg"
								alt="white google"
							/>
						</div>
						<div>
							<img
								src="/assets/bg-white-appstore.svg"
								alt="white appstore"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center relative z-20">
					<img
						src="/assets/holding-phone.svg"
						alt="hand holding phone"
						className="w-full"
					/>
				</div>
			</div>
		</section>
	);
}
