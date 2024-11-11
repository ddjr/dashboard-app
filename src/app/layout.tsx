import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import TopNav from "./_components/topnav";

export const metadata: Metadata = {
  title: "My Amazing App",
  description: "Get started today",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col">
          <div className="w-full">
            <TopNav />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
