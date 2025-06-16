"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function AnimatedCard({
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
					duration: 2,
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
export default AnimatedCard;
