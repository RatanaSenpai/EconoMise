"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-cente border shadow-effect">
      <Image src={"/logo.png"} width={180} height={100} alt="logo" />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
