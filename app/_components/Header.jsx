import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-5 flex justify-between items-cente border shadow-effect">
      <Image src={"./logo.svg"} width={160} height={100} alt="logo" />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
