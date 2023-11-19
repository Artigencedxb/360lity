import Image from "next/image";
import React from "react";
import {
  InstagramBlackIcon,
  LinkedinIcon,
  WhatsappIcon,
  TiktokIcon,
} from "../../assets/social";
import Link from "next/link";
import { Team } from "../../types/team";
import Triangle from "../../common/Triangle";

const TeamCard: React.FC<{ data: Team }> = ({ data }) => {
  return (
    <div className="bg-white overflow-hidden rounded-x px-8 sm:px-16 py-12 flex lg:flex-row flex-col-reverse gap-12 lg:gap-0 items-start justify-between">
      <div className="overflow-hidden">
        <h2 className="text-[36px] font-semibold">{data?.name}</h2>
        <h3 className="text-[20px] font-semibold">{data?.role}</h3>
        <p className="overflow-hidden text-[20px] mt-8">{data?.description}</p>
        <div className="flex items-center mt-10 gap-4">
          {data?.whatsapp?.length ? (
            <Link href={`https://wa.me/${data?.whatsapp}`}>
              <Image src={WhatsappIcon} alt="Whatsapp icon" />
            </Link>
          ) : (
            ""
          )}
          {data?.linkedin?.length ? (
            <Link href={data?.linkedin}>
              <Image src={LinkedinIcon} alt="Linkedin icon" />
            </Link>
          ) : (
            ""
          )}
          {data?.instagram?.length ? (
            <Link href={data?.instagram}>
              <Image src={InstagramBlackIcon} alt="Instagram icon" />
            </Link>
          ) : (
            ""
          )}
          {data?.tiktok?.length ? (
            <Link href={data?.tiktok}>
              <Image src={TiktokIcon} alt="Tiktok icon" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="self-center w-full relative sm:w-[360px] h-[360px] bg-[#D9D9D9] rounded-x">
      
        {data?.image?.length ? (
          <Image src={data?.image} alt={data?.name} className="object-cover rounded-x" fill />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TeamCard;
