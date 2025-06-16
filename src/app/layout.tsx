import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//components
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gradr - AI-Powered Study Assistant",
	description:
		"Transform your study experience with AI-powered quizzes, document chat, and progress tracking",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-white text-gray-800`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
