import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Test App",
  description: "Get started today",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
        <Link href="/">Home</Link>
        <Link href="/layer2">About</Link>
        <Link href="/Dashboard">Dashboard</Link>
        <Link href="/Explore">Explore</Link>
        <Link href="/SignIn">Sign In</Link>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col">
        <div className="w-full">
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  );
}
