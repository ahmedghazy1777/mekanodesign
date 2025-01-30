import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const workSans = localFont({
  variable: "--font-geist-sans",
  weight: "400",
  src: "./fonts/Worksans.woff2",
});

export const metadata: Metadata = {
  title: "MekanoDesign",
  description: "MekanoDesign",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#C9AE17",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Worksans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${workSans.variable} antialiased font-work-sans`}>
        {children}
      </body>
    </html>
  );
}
