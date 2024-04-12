import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowledge Nikeshh",
  description: "Resources from nikeshh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <ClerkProvider appearance={{ baseTheme: dark }}>
              <Header />
              <main>{children}</main>
              <Footer />
              <PrismicPreview repositoryName={repositoryName} />
            </ClerkProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
