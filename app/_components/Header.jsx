"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-cente border shadow-effect">
      <Image src={"./logo.svg"} width={160} height={100} alt="logo" />
      {isSignedIn ? <UserButton /> : <Button>Get Started</Button>}
    </div>
  );
}

export default Header;
