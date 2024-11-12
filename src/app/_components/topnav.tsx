import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SimpleUploadButton from "./simple-upload-button";

export default function TopNav() {
  return (
    <nav className="flex h-fit w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Home</Link>
      <Link href="/layer2">About</Link>
      <Link href="/Dashboard">Dashboard</Link>
      <Link href="/Explore">Explore</Link>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
