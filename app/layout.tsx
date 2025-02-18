import type { Metadata } from "next";
import { UIProvider } from "./providers/UIProvider";

export const metadata: Metadata = {
  title: "GLAPE",
  description: "Powered by GLEAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
