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
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black px-[3.5rem] md:px-[4.5rem] xl:px-[6rem] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 py-12 gap-y-4 lg:gap-y-0">
        <div className="space-y-3 flex justify-center flex-col items-center">
          <Image src={LogoWhite} alt="White logo" width={37} height={37} />
          <p className="text-sm font-normal">360lity.com</p>
          <div className="flex items-center gap-2">
            <Image src={FacebookIcon} alt="Facebook icon" />
            <Image src={InstagramIcon} alt="Instagram icon" />
            <Image src={TiktokIcon} alt="Tiktok icon" />
            <Image src={TwitterIcon} alt="Twitter icon" />
            <Image src={YoutubeIcon} alt="Youtube icon" />
          </div>
        </div>

        <div className="space-y-1.5 text-start lg:text-center">
          <h3 className="mb-3">360lity</h3>
          <p className="text-sm">About</p>
          <p className="text-sm">Showcase</p>
          <p className="text-sm">Projects</p>
          <p className="text-sm">Blogs</p>
          <p className="text-sm">XV Explore</p>
          <p className="text-sm">Clients</p>
          <p className="text-sm">Team</p>
        </div>
        <div className="space-y-1.5 text-start lg:text-center">
          <h3 className="mb-3">Services</h3>

          <p className="text-sm">360-XVT</p>
          <p className="text-sm">VR/AR</p>
          <p className="text-sm">3D-Studio</p>
          <p className="text-sm">Animation</p>
          <p className="text-sm">Photoraphy</p>
          <p className="text-sm">Videography</p>
        </div>
        <div className="space-y-1.5 text-start lg:text-center flex flex-col">
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
        <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
          <div className="bg-white w-full triangle-box flex items-center justify-between rounded-[15px] p-5 gap-14">
            <Image
              src={FooterLogo}
              alt="Footer Logo"
              className="rounded-[15px]"
            />
            <Image src={FooterQr} alt="Footer Qr" className="rounded-[15px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
