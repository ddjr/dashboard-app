import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Test App",
  description: "Get started today",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
      <div>
        <a className="">Home</a>
      </div>
      <div>
        <a className="">About</a>
      </div>
      <div>
        <a className="">Dashboard</a>
      </div>
      <div>
        <a className="">Explore</a>
      </div>
      <div>
        <a className="">Sign In</a>
      </div>
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
