import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Home</Link>
      <Link href="/layer2">About</Link>
      <Link href="/Dashboard">Dashboard</Link>
      <Link href="/Explore">Explore</Link>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
