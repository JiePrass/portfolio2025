import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

const sfPro = localFont({
  src: [
    { path: "../../public/fonts/SF-Pro-Display-Ultralight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Thin.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Semibold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Heavy.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/SF-Pro-Display-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-sfpro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JiePrass",
  description: "Fullstack Developer & UI/UX Designer",
  icons: {
    icon: "/icons/jplogo-main.svg",
    shortcut: "/icons/jplogo-main.svg",
    apple: "/icons/jplogo-main.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
