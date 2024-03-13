"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { Avatar, Dropdown } from "flowbite-react";
import second from "../public/logo.jpeg";
import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-slate-200 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-center w-full">
          {session && session.user ? (
            <>
              <div className="flex justify-center items-center gap-5">
                <Link
                  className={cn("text-black/75", textFont.className)}
                  href="/dashboard"
                >
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Dropdown
                  label={
                    <Avatar alt="profile" img={second.src} rounded bordered />
                  }
                  arrowIcon={false}
                  inline
                  size=""
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{session.user.name}</span>
                    <span className="block truncate text-sm font-medium">
                      {session.user.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <button
                      className="text-red-500 w-full"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </>
          ) : (
            <>
              <Button size="sm" variant="outline" asChild>
                <Link href="/api/auth/signin">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/sign-up">Get DropTask for free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
