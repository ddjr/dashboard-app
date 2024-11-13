import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { PHProvider } from "./_analytics/providers";
import posthog from "posthog-js";

export const metadata: Metadata = {
  title: "My Amazing App",
  description: "Get started today",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  posthog.capture("my event", { property: "value" });
  return (
    <ClerkProvider>
      <PHProvider>
        <html lang="en" className={`${GeistSans.variable} dark`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body>
            <div className="flex h-screen flex-col">
              <TopNav />
              <div className="no-scrollbar flex-grow overflow-y-scroll">
                {children}
              </div>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </PHProvider>
    </ClerkProvider>
  );
}
