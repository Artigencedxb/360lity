import {
  FacebookIcon,
  FooterLogo,
  FooterQr,
  InstagramIcon,
  LogoWhite,
  TiktokIcon,
  TriangleBlackIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets";
import Triangle from "@/common/Triangle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TriangleBlack from "../../common/TriangleBlack";
import { useGetContact } from "../../api/contactus";

const Footer = () => {
  const { data } = useGetContact();
  const contact = data?.data?.contact;
  return (
    <footer className="bg-black text-white">
      <div className="lg:max-w-6xl px-[2rem] sm:px-[3rem] lg:px-[1.5rem] gap-x-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-12 gap-y-8 lg:gap-y-0">
        <div className="space-y-3 flex justify-center flex-col items-center">
          <Image src={LogoWhite} alt="White logo" width={37} height={37} />
          <p className="text-sm font-normal">360lity.com</p>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.facebook.com/threesixtylity/"
              target="_blank"
            >
              <Image src={FacebookIcon} alt="Facebook icon" />
            </Link>
            <Link href="https://www.instagram.com/360lity/" target="_blank">
              <Image src={InstagramIcon} alt="Instagram icon" />
            </Link>
            <Link href="https://www.tiktok.com/@360lity" target="_blank">
              <Image src={TiktokIcon} alt="Tiktok icon" />
            </Link>
            <Link href="https://twitter.com/360lity" target="_blank">
              <Image src={TwitterIcon} alt="Twitter icon" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UClt1CyYnBgq3H_mWtrFfrPg"
              target="_blank"
            >
              <Image src={YoutubeIcon} alt="Youtube icon" />
            </Link>
          </div>
        </div>

        <ul className="px-5 space-y-1.5 text-start lg:text-start">
          <li className="mb-3 font-semibold">360lity</li>

          <li className="text-sm hover:text-zinc-100">
            {" "}
            <Link href="/showcase">Showcase</Link>
          </li>

          <li className="text-sm hover:text-zinc-100">
            <Link href="/projects">Projects</Link>
          </li>

          <li className="text-sm hover:text-zinc-100">
            {" "}
            <Link href="/xvt">XVT</Link>
          </li>

          <li className="text-sm hover:text-zinc-100">
            <Link href="/blog">Blogs</Link>
          </li>

          <li className="text-sm hover:text-zinc-100">
            <Link href="/aboutus">About</Link>
          </li>

          <li className="text-sm hover:text-zinc-100">
            <Link href="/contactus">Contact</Link>
          </li>

          <li className="text-sm hover:text-zinc-100">
            <Link href="#">Team</Link>
          </li>
        </ul>
        <div className="px-5 space-y-1.5 text-start lg:text-start">
          <h3 className="mb-3 font-semibold">Services</h3>

          <p className="text-sm">360-XVT</p>
          <p className="text-sm">VR/AR</p>
          <p className="text-sm">3D-Studio</p>
          <p className="text-sm">Animation</p>
          <p className="text-sm">Photography</p>
          <p className="text-sm">Videography</p>
        </div>
        <div className="px-5 space-y-1.5 text-start lg:text-start flex flex-col">
          <h3 className="mb-3 font-semibold">Contact</h3>
          <Link href="/contactus" className="text-sm hover:text-zinc-100">Feedback</Link>
          <Link href={`tel:${contact?.phone}`} className="text-sm hover:text-zinc-100">
            Tel: {contact?.phone}
          </Link>

          <Link
            target="_blank"
            href={`https://wa.me/${contact?.phone}`}
            className="text-sm"
          >
            WhatsApp
          </Link>
          <Link href={`mailto:${contact?.email}`} className="text-sm hover:text-zinc-100">
            E mail
          </Link>
        </div>
        <div className="flex items-center justify-start flex-col gap-4">
          <div className="bg-white w-[200px] lg:w-full relative flex items-center justify-between rounded-[15px] px-6 py-6">
            <div className="relative w-[50px] h-[50px]">
              <Image fill src={FooterLogo} alt="Footer Logo" />
            </div>
            <div className="relative w-[60px] h-[60px]">
              <Image src={FooterQr} alt="Footer Qr" fill />
            </div>
            <TriangleBlack />
          </div>
          <p className="text-[11px] lg:text-[10px] xl:text-[11px]">
            copyright All rights reserved 360lity.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
