import Image from "next/image";
import React from "react";

function SideNav() {
  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
    </div>
  );
}

export default SideNav;
