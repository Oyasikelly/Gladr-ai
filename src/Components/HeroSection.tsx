"use client";

import { FaArrowUp } from "react-icons/fa";
import { colors } from "../data/color";
import { motion } from "framer-motion";

import { easeOut } from "framer-motion";

const fadeUp = (delay: number = 0) => ({
	initial: { opacity: 0, y: 40 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay,
			ease: easeOut,
		},
	},
});

export default function HeroSection() {
	return (
		<section
			style={{
				background: `
      radial-gradient(ellipse at 62% 41%, rgba(146, 38, 88, 0.5) 0%, rgba(155, 35, 91, 0.18) 55%, rgba(155, 35, 91, 0) 100%),
      radial-gradient(ellipse at 44% 32%, rgba(32, 96, 221, 0.5) 0%, rgba(32, 96, 221, 0.2) 60%, rgba(32, 96, 221, 0) 100%),
      #050F2F
    `,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			className="relative flex flex-col justify-center items-center lg:px-40 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
			{/* Background Circles */}
			<motion.div
				className="absolute top-0 inset-0 z-10"
				animate={{ scale: [1, 1.05, 1] }}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}>
				<img
					src="/assets/background-multiple-circle.svg"
					alt="background"
					className="w-full h-full object-contain"
				/>
			</motion.div>

			{/* Decorative Floating Icons */}
			<motion.img
				src="/assets/learn-smartly.svg"
				alt="Learn Smartly"
				className="absolute left-2 top-28 w-20 md:w-32 z-20"
				animate={{ y: [0, -10, 0] }}
				transition={{ duration: 3, repeat: Infinity }}
			/>
			<motion.img
				src="/assets/lightning.svg"
				alt="lightning icon"
				className="absolute right-6 top-20 w-8 lg:w-16 z-20"
				animate={{ rotate: [0, 20, -20, 0] }}
				transition={{ duration: 4, repeat: Infinity }}
			/>

			{/* Main Content */}
			<div className="relative z-20 container mx-auto flex flex-col justify-center items-center text-center px-4">
				<motion.h1
					className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
					style={{ color: colors.white }}
					{...fadeUp(0.2)}>
					Transform Your Study Experience With AI
				</motion.h1>

				<motion.p
					className="text-[16px] md:text-[18px] max-w-[604px] mb-8 text-white/80"
					{...fadeUp(0.4)}>
					Upload Your Material — Simply upload any PDF or PowerPoint. Our AI
					will analyze and process your content instantly.
				</motion.p>

				{/* CTA Button */}
				<motion.button
					{...fadeUp(0.6)}
					whileHover={{
						scale: 1.05,
						boxShadow: "0px 8px 25px rgba(105, 56, 239, 0.5)",
					}}
					whileTap={{
						scale: 0.95,
						boxShadow: "0px 4px 12px rgba(105, 56, 239, 0.3)",
					}}
					className="w-[80%] lg:w-[336px] flex justify-center items-center gap-3 bg-[#6938EF] font-[1.1rem] text-white px-8 py-4 rounded-full font-bold transition-all duration-300">
					Get Started Now
					<motion.span
						whileHover={{ rotate: -20 }}
						whileTap={{ rotate: 0 }}
						className="p-1 bg-white w-fit rounded-full">
						<FaArrowUp color={`${colors.dark}`} />
					</motion.span>
				</motion.button>

				{/* User Count */}
				<motion.div
					className="relative my-10 flex justify-between items-center gap-3"
					{...fadeUp(0.8)}>
					<span className="text-white text-[11px] md:text-md">
						Join 1,000+ users using Gladr
					</span>
					<img
						src="/assets/clients.svg"
						alt="People collaborating"
						className="max-w-[200px]"
					/>
				</motion.div>

				{/* Dashboard Image */}
				<motion.div
					className="w-full max-w-[90%]"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.9, ease: "easeOut" }}>
					<img
						src="/assets/dash-board.png"
						alt="Dashboard"
						className="w-full mx-auto rounded-2xl shadow-2xl"
					/>
				</motion.div>
			</div>
		</section>
	);
}
