import type { Metadata } from "next";
import { UIProvider } from "./providers/UIProvider";
import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
import SafeArea from "./components/safeArea";

export const metadata: Metadata = {
	title: "Goodle",
	description: "Created By GLEAP",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>
				<Box h="100vh" w="100vw">
					<UIProvider>
						<SafeArea />
						<Header />
						<Box h={{base:"100%", md:"calc(100% - 50px)"}} w="100%" mt={{base:"0", md:"50px"}}>
						{children}
						</Box>
						<Footer />
					</UIProvider>
				</Box>
			</body>
		</html>
	);
}
