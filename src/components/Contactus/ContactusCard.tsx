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
  console.log(contact?.phone, "phone");
  
  return (
    <div className="self-stretch justify-between flex flex-col gap-5 md:w-[300px] h-auto">
      <div
        className={cn("h-[200px] rounded-x relative w-full", {
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
      <div className="bg-white flex flex-col justify-end rounded-x p-8">
        <div className="text-sm font-normal whitespace-pre-wrap">
          {contact?.description ?? ""}
        </div>
        <div className="flex items-center gap-4 justify-center mt-6">
          <Link href={`tel:${contact?.phone}`}>
            <Image src={PhoneIcon} alt="Phone icon" />
          </Link>
          <Link
          target="_blank"
          href={`https://wa.me/${contact?.whatsapp}`}
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
