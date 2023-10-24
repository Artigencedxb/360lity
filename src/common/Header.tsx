"use client";
import Button from "@/UI/Button";
import { Logo } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Header: React.FC<{ heading: string; buttonText?: string }> = ({
  heading,
  buttonText,
}) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3">
      <button
        className="relative w-[25px] h-[25px] md:w-[41px] md:h-[41px]"
        onClick={() => router.back()}
      >
        <Image fill src={Logo} alt="" />
      </button>
      <h1>{heading}</h1>
      {buttonText?.length && (
        <Button text={buttonText} className="ml-auto w-auto" />
      )}
    </div>
  );
};

export default Header;
