"use client";
import { MailIcon, PhoneIcon, WhatsappIcon } from "@/assets";
import Image from "next/image";
import React from "react";
import Triangle from "../../common/Triangle";
import { useGetContact } from "../../api/contactus";
import Link from "next/link";
import cn from "classnames";

const ContactusCard = () => {
  const { data } = useGetContact();
  const contact = data?.data.contact;
  return (
    <div className="flex flex-col gap-4 md:w-[300px] h-full">
      <div
        className={cn("h-[210px] rounded-x relative w-full", {
          "": contact?.image?.length,
          "bg-black": !contact?.image?.length,
        })}
      >
        {contact?.image?.length && (
          <Image
            className="rounded-x object-cover"
            src={contact?.image}
            fill
            alt="contact image"
          />
        )}
        <Triangle />
      </div>
      <div className="bg-white rounded-[15px] p-8">
        <div className="text-sm font-normal whitespace-pre-wrap">
          Ready to embark on a journey beyond reality? Contact us today, and
          let&apos;s craft immersive realities together.
        </div>
        <div className="flex items-center gap-4 justify-center mt-6">
          <Link href={`tel:${contact?.phone}`}>
            <Image src={PhoneIcon} alt="Phone icon" />
          </Link>
          <Link
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${contact?.phone}`}
          >
            <Image src={WhatsappIcon} alt="Whatsapp icon" />
          </Link>
          <Link href={`mailto:${contact?.email}`}>
            <Image src={MailIcon} alt="Mail icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactusCard;
