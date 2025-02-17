import type { Metadata } from "next";
import { UIProvider } from "./providers/UIProvider";
import { Box } from "@chakra-ui/react";
import Header, { headerHeight } from "./components/header";
import Footer, { footerHeight } from "./components/footer";
import SafeArea from "./components/safeArea";

export const metadata: Metadata = {
  title: "GLAPE",
  description: "Powered By GLEAP",
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
            <Box
              h={{ base: "", md: "100%" }}
              w="100%"
              pt={{ base: "0", md: headerHeight }}
              pb={{ base: footerHeight, md: "0" }}
            >
              {children}
            </Box>
            <Footer />
          </UIProvider>
        </Box>
      </body>
    </html>
  );
}
