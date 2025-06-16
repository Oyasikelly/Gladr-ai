// color.ts
export const colors = {
	// Core colors
	darker: "#090045", // Headings, sign-up buttons
	dark: "#050f2f",
	black: "#000000",
	white: "#ffffff",
	footerBg: "#040404",

	// Gradient definitions
	radialGradientA:
		"radial-gradient(circle, #922658 50%, #98235b 18%, #9b2358 0%)",
	radialGradientB:
		"radial-gradient(circle, #2060dd 50%, #0529a1 8.6%, #03289c 0%)",
};

export const textStyles = {
	// Font sizes with responsive units (rem)
	fontSize: {
		// Mobile-first approach (base sizes)
		base: {
			h1: "1.8rem",
			h2: "1.6rem",
			h3: "1.4rem",
			h4: "1.2rem",
			body: "1rem",
			small: "0.875rem",
			button: "1rem",
		},
		// Tablet sizes (min-width: 768px)
		md: {
			h1: "2.2rem",
			h2: "1.8rem",
			h3: "1.6rem",
			h4: "1.4rem",
			body: "1.1rem",
		},
		// Desktop sizes (min-width: 1024px)
		lg: {
			h1: "2.5rem",
			h2: "2rem",
			h3: "1.8rem",
			h4: "1.6rem",
			body: "1.2rem",
		},
		// Large desktop (min-width: 1440px)
		xl: {
			h1: "3rem",
			h2: "2.5rem",
			h3: "2rem",
		},
	},

	// Font weights
	fontWeight: {
		light: 300,
		regular: 400,
		medium: 500,
		bold: 700,
		black: 900,
	},

	// Line heights
	lineHeight: {
		normal: 1.5,
		tight: 1.25,
		relaxed: 1.75,
	},

	// Color applications
	color: {
		heading: colors.darker,
		body: colors.dark,
		buttonText: colors.white,
		footerText: colors.white,
	},

	// Backgrounds
	background: {
		buttonPrimary: colors.darker,
		footer: colors.footerBg,
		heroGradient: colors.radialGradientB,
		featureGradient: colors.radialGradientA,
	},
};

// Responsive text utility function
export const responsiveText = (
	variant: keyof typeof textStyles.fontSize.base
) => {
	return {
		fontSize: textStyles.fontSize.base[variant],
		fontWeight: variant.startsWith("h")
			? textStyles.fontWeight.bold
			: textStyles.fontWeight.regular,
		lineHeight: textStyles.lineHeight.normal,
		color: variant.startsWith("h")
			? textStyles.color.heading
			: textStyles.color.body,

		// Responsive media queries
		"@media (min-width: 768px)": {
			fontSize:
				textStyles.fontSize.md[
					variant as keyof typeof textStyles.fontSize.md
				] || textStyles.fontSize.base[variant],
		},
		"@media (min-width: 1024px)": {
			fontSize:
				textStyles.fontSize.lg[
					variant as keyof typeof textStyles.fontSize.lg
				] ||
				textStyles.fontSize.md[variant as keyof typeof textStyles.fontSize.md],
		},
		"@media (min-width: 1440px)": {
			fontSize:
				textStyles.fontSize.xl[
					variant as keyof typeof textStyles.fontSize.xl
				] ||
				textStyles.fontSize.lg[variant as keyof typeof textStyles.fontSize.lg],
		},
	};
};

// Button styles
export const buttonStyles = {
	primary: {
		backgroundColor: colors.darker,
		color: colors.white,
		padding: "0.75rem 2rem",
		borderRadius: "4px",
		fontWeight: textStyles.fontWeight.bold,
		fontSize: textStyles.fontSize.base.button,
		border: "none",

		// Responsive font size
		"@media (min-width: 768px)": {
			fontSize: textStyles.fontSize.md.body,
		},
	},
};
