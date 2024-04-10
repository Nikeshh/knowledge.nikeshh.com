import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import NotificationC from "@/components/notification";
import Script from "next/script";

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/animate.min.css" />
        <link rel="stylesheet" href="/static/css/font-awesome.css" />
        <link rel="stylesheet" href="/static/css/boxicons.min.css" />
        <link rel="stylesheet" href="/static/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/static/css/style.css" />
        <link rel="stylesheet" href="/static/css/responsive.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
        <title>Docs</title>
      </head>
      <body className={font.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <ClerkProvider appearance={{ baseTheme: dark }}>
              <main className="w-full">
                {/*<NotificationC />*/}
                {/*<Navigation />*/}
                {children}
                {/*<Footer />*/}
              </main>
            </ClerkProvider>
          </ModalProvider>
        </ThemeProvider>
        <Script src="/static/js/jquery.min.js"></Script>
        <Script src="/static/js/popper.min.js"></Script>
        <Script src="/static/js/bootstrap.min.js"></Script>
        <Script src="/static/js/wow.min.js"></Script>
        <Script src="/static/js/owl.carousel.min.js"></Script>
        <Script src="/static/js/custom.js"></Script>
      </body>
    </html>
  );
}
