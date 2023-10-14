import {
  FacebookIcon,
  FooterLogo,
  FooterQr,
  InstagramIcon,
  LogoWhite,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets";
import Triangle from "@/common/Triangle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="lg:max-w-6xl px-[2rem] sm:px-[3rem] lg:px-[1.5rem] gap-x-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-12 gap-y-8 lg:gap-y-0">
        <div className="space-y-3 flex justify-center flex-col items-center">
          <Image src={LogoWhite} alt="White logo" width={37} height={37} />
          <p className="text-sm font-normal">360lity.com</p>
          <div className="flex items-center gap-3">
            <Image src={FacebookIcon} alt="Facebook icon" />
            <Image src={InstagramIcon} alt="Instagram icon" />
            <Image src={TiktokIcon} alt="Tiktok icon" />
            <Image src={TwitterIcon} alt="Twitter icon" />
            <Image src={YoutubeIcon} alt="Youtube icon" />
          </div>
        </div>

        <ul className="px-5 space-y-1.5 text-start lg:text-start">
          <li className="mb-3">360lity</li>

          <li className="text-sm">
            {" "}
            <Link href="/showcase">Showcase</Link>
          </li>

          <li className="text-sm">
            <Link href="/projects">projects</Link>
          </li>

          <li className="text-sm">
            {" "}
            <Link href="/xvt">XVT</Link>
          </li>

          <li className="text-sm">
            <Link href="/blog">Blogs</Link>
          </li>

          <li className="text-sm">
            <Link href="/explore">XV Exlilore</Link>
          </li>

          <li className="text-sm">
            <Link href="/aboutus">About</Link>
          </li>

          <li className="text-sm">
            <Link href="/contactus">Contact</Link>
          </li>

          <li className="text-sm">
            <Link href="#">Team</Link>
          </li>
        </ul>
        <div className="px-5 space-y-1.5 text-start lg:text-start">
          <h3 className="mb-3">Services</h3>

          <p className="text-sm">360-XVT</p>
          <p className="text-sm">VR/AR</p>
          <p className="text-sm">3D-Studio</p>
          <p className="text-sm">Animation</p>
          <p className="text-sm">Photoraphy</p>
          <p className="text-sm">Videography</p>
        </div>
        <div className="px-5 space-y-1.5 text-start lg:text-start flex flex-col">
          <h3 className="mb-3">Contact</h3>
          <p className="text-sm">Feedback</p>
          <Link href="tel:+971 543243123" className="text-sm">
            Tel:+9714314431
          </Link>

          <Link href="#" className="text-sm">
            Whatsapp
          </Link>
          <Link href="#" className="text-sm">
            E mail
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="bg-white w-[200px] lg:w-full relative flex items-center justify-between rounded-[15px] px-4 py-6">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={FooterLogo}
                alt="Footer Logo"
                className="rounded-[15px]"
              />
            </div>
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={FooterQr}
                alt="Footer Qr"
                fill
                className="rounded-[15px]"
              />
            </div>
            <Triangle className="bg-black" />
          </div>
          <p className="text-[11px]">
            copyright All rights reserved 360lity.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
