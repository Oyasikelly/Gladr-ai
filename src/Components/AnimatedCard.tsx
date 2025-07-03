"use client";

import { useRef, useEffect, useState } from "react";

function AnimatedCard({
	children,
	index,
}: {
	children: React.ReactNode;
	index: number;
}) {
	return <div>{children}</div>;
}
export default AnimatedCard;
