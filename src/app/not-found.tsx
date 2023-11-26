"use client";
import Link from "next/link";
import Lottie, { useLottie } from "lottie-react";
import animation from "../../public/animation.json";
import Image from "next/image";
import { LogoMain } from "@/assets";
import Button from "@/UI/Button";

export default function NotFound() {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="flex items-center justify-center flex-col">
        <Image src={LogoMain} alt="Logo" className="mb-4" />
        <h2>Not Found</h2>
        <p className="font-medium mb-4">Could not find requested resource</p>
        <Link href="/">
          <Button text={"Return Home"} />
        </Link>
      </div>
    </div>
  );
}
