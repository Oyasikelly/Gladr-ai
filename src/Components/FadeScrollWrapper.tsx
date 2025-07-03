"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface FadeScrollWrapperProps {
	children: React.ReactNode;
	className?: string;
}

export default function FadeScrollWrapper({
	children,
	className = "",
}: FadeScrollWrapperProps) {
	const ref = useRef(null);
	const controls = useAnimation();
	const inView = useInView(ref, { amount: 0.4 });
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (inView && !hasAnimated) {
			controls.start("visible");
			setHasAnimated(true);
		}
	}, [inView, controls, hasAnimated]);

	return (
		<motion.div
			ref={ref}
			className={className}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 40, scale: 0.95 },
				visible: {
					opacity: 1,
					y: 0,
					scale: 1,
					transition: {
						duration: 1.2,
						ease: "easeOut",
					},
				},
				exit: {
					opacity: 0.2,
					y: -20,
					scale: 0.98,
					transition: {
						duration: 1.2,
						ease: "easeInOut",
					},
				},
			}}>
			{children}
		</motion.div>
	);
}
