import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const butler = localFont({
  src: [
    {
      path: "./fonts/Butler_Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Butler_Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Butler_Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/Butler_Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/Butler_ExtraBold.woff",
      weight: "800",
    },
  ],
  variable: "--font-butler",
  weight: "100 900",
});

const saira = localFont({
  src: [
    {
      path: "./fonts/Saira-Thin.woff",
      weight: "100",
    },
    {
      path: "./fonts/Saira-ExtraLight.woff",
      weight: "200",
    },
    {
      path: "./fonts/Saira-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/Saira-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Saira-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Saira-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/Saira-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/Saira-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./fonts/Saira-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-saira",
  weight: "100 900",
});
const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Thin.woff",
      weight: "100",
    },
    {
      path: "./fonts/Roboto-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/Roboto-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Roboto-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Roboto-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/Roboto-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-roboto",
  weight: "100 900",
});
const cairo = localFont({
  src: [
    {
      path: "./fonts/Cairo-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/Cairo-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Cairo-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Cairo-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/Cairo-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/Cairo-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./fonts/Cairo-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-cairo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shruti's PortFolio",
  description: "Full stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#161519] text-[#fff]`}
      >
        {children}
      </body>
    </html>
  );
}
