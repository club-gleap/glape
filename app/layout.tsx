import type { Metadata } from "next";
import { UIProvider } from "./providers/UIProvider";
import ContentArea from "./components/contentArea";
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
      <body style={{ height: "100vh", width: "100vw" }}>
        <UIProvider>
          <SafeArea />
          <Header />
          <ContentArea headerHeight={headerHeight} footerHeight={footerHeight}>
            {children}
          </ContentArea>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
