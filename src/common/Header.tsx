"use client";
import { Logo } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Header: React.FC<{ heading: string }> = ({ heading }) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3">
      <button onClick={() => router.back()}>
        <Image src={Logo} alt="" />
      </button>
      <h1>{heading}</h1>
    </div>
  );
};

export default Header;
