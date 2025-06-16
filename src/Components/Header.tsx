"use client";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { colors } from "../data/color";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
	};

	const navItems = ["Home", "Features", "Howitworks", "Pricing", "Contact Us"];

	return (
		<>
			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-50 z-40"
						onClick={toggleMenu}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>
				)}
			</AnimatePresence>

			{/* Header Container */}
			<motion.header
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full px-4 py-3 md:px-8 md:py-4 flex items-center justify-between relative">
				{/* Logo section */}
				<div className="flex items-center gap-1">
					<img
						src="/assets/gladr.svg"
						alt="gladr logo"
						className="w-10 h-10 md:w-12 md:h-12"
					/>
					<span
						className="text-xl md:text-2xl font-bold"
						style={{ color: colors.darker }}>
						Gladr
					</span>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6 lg:space-x-8">
					{navItems.map((item) => (
						<a
							key={item}
							href="#"
							className="relative group font-medium"
							style={{ color: colors.darker, fontSize: "0.95rem" }}>
							{item}
							<motion.div
								layoutId="underline"
								className="absolute left-0 -bottom-1 h-[2px] bg-[#4319BC] w-0 group-hover:w-full transition-all duration-300 origin-left"
							/>
						</a>
					))}
				</nav>

				{/* Login/Signup Desktop */}
				<div className="flex justify-center items-center gap-4">
					<button
						className="hidden md:block px-4 py-2 rounded-full font-medium cursor-pointer shadow-sm hover:shadow-md transition-all"
						style={{
							color: colors.darker,
							fontSize: "0.95rem",
						}}>
						Login
					</button>
					<button
						className="hidden md:block px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all"
						style={{
							backgroundColor: colors.darker,
							color: colors.white,
							fontSize: "0.95rem",
						}}>
						Sign up
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-3xl"
					onClick={toggleMenu}
					style={{ color: colors.darker }}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
					{isMenuOpen ? <IoIosCloseCircleOutline /> : <RiMenu3Fill />}
				</button>

				{/* Mobile Navigation Drawer */}
				<motion.div
					initial={{ x: "100%" }}
					animate={{ x: isMenuOpen ? 0 : "100%" }}
					exit={{ x: "100%" }}
					transition={{ type: "spring", stiffness: 260, damping: 20 }}
					className={`fixed top-0 right-0 h-full w-64 z-50 bg-white shadow-lg`}>
					<div className="p-6">
						{/* Mobile Navigation Links */}
						<nav className="flex flex-col space-y-6">
							{navItems.map((item) => (
								<a
									key={item}
									href="#"
									onClick={toggleMenu}
									className="relative font-medium py-2 border-b border-gray-100"
									style={{ color: colors.darker }}>
									{item}
									<motion.div
										layoutId="underline"
										className="absolute left-0 -bottom-1 h-[2px] bg-[#4319BC] w-full"
									/>
								</a>
							))}
						</nav>

						{/* Mobile Login/Signup Buttons */}
						<div className="flex justify-center items-center gap-4 mt-8">
							<button
								className="w-full mb-4 px-4 py-2 rounded-md font-medium"
								style={{ color: colors.darker }}>
								Login
							</button>
							<button
								className="w-full mb-4 px-4 py-2 rounded-md font-medium shadow-sm"
								style={{
									backgroundColor: colors.darker,
									color: colors.white,
								}}>
								Sign up
							</button>
						</div>
					</div>
				</motion.div>
			</motion.header>
		</>
	);
}
