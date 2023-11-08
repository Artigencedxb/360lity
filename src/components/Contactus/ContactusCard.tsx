import { MailIcon, PhoneIcon, WhatsappIcon } from "@/assets";
import Image from "next/image";
import React from "react";
import Triangle from "../../common/Triangle";

const ContactusCard = () => {
  return (
    <div className="flex flex-col gap-4 md:w-[300px] h-full">
      <div className="bg-black h-[210px] rounded-[15px] relative">
        {" "}
        <Triangle />
      </div>
      <div className="bg-white rounded-[15px] p-8">
        <div className="text-sm font-normal whitespace-pre-wrap">
          Ready to embark on a journey beyond reality? Contact us today, and
          let&apos;s craft immersive realities together.
        </div>
        <div className="flex items-center gap-4 justify-center mt-6">
          <Image src={PhoneIcon} alt="Phone icon" />
          <Image src={WhatsappIcon} alt="Whatsapp icon" />
          <Image src={MailIcon} alt="Mail icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactusCard;
