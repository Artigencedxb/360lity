"use client";
import Button from "@/UI/Button";
import { Logo } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Header: React.FC<{
  result?: number;
  heading: string;
  buttonText?: string;
  buttonUrl?: string;
  disabled?: boolean;
}> = ({ result, heading, buttonText, buttonUrl = "#", disabled = false }) => {
  const router = useRouter();

  const clickHandler = () => {
    if (result === 6 && heading === "Showcase") {
      return toast.error("You can only add 6 showcases.");
    }
    router?.push(buttonUrl as string);
  };

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
        <Button
          disabled={disabled}
          text={buttonText}
          className="ml-auto w-auto"
          onClick={clickHandler}
        />
      )}
    </div>
  );
};

export default Header;
