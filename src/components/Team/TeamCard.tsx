"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  InstagramBlackIcon,
  InstagramWhiteIcon,
  LinkedinIcon,
  LinkedinWhiteIcon,
  TiktokBlackIcon,
  TiktokWhiteIcon,
  WhatsappIcon,
  WhatsappWhiteIcon,
} from "../../assets/social";
import Link from "next/link";
import { Team } from "../../types/team";
import Triangle from "../../common/Triangle";

const TeamCard: React.FC<{
  data: Team;
  setTeamData: React.Dispatch<React.SetStateAction<Team | null>>;
}> = ({ data, setTeamData }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setTeamData(data)}
        onMouseLeave={() => setTeamData(null)}
        className="group relative self-center w-full overflow-hidden h-[210px] bg-[#D9D9D9] rounded-x"
      >
        <Triangle type="white" />
        {data?.image?.length ? (
          <Image
            src={data?.image}
            alt={data?.name}
            className="grayscale-0 group-hover:grayscale object-cover duration-700 scale-105 group-hover:scale-100 transition-all rounded-x"
            fill
          />
        ) : (
          ""
        )}
        <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10">
          <div className="flex items-center justify-center gap-4">
            {data?.whatsapp?.length ? (
              <Link target="_blank" href={`https://wa.me/${data?.whatsapp}`}>
                <Image
                  className="hover:scale-105 transition-all duration-300"
                  src={WhatsappWhiteIcon}
                  alt="Whatsapp icon"
                />
              </Link>
            ) : (
              ""
            )}
            {data?.linkedin?.length ? (
              <Link target="_blank" href={data?.linkedin}>
                <Image
                  className="hover:scale-105 transition-all duration-300"
                  src={LinkedinWhiteIcon}
                  alt="Linkedin icon"
                />
              </Link>
            ) : (
              ""
            )}
            {data?.instagram?.length ? (
              <Link target="_blank" href={data?.instagram}>
                <Image
                  className="hover:scale-105 transition-all duration-300"
                  src={InstagramWhiteIcon}
                  alt="Instagram icon"
                />
              </Link>
            ) : (
              ""
            )}
            {data?.tiktok?.length ? (
              <Link target="_blank" href={data?.tiktok}>
                <Image
                  className="hover:scale-105 transition-all duration-300"
                  src={TiktokWhiteIcon}
                  alt="Tiktok icon"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="bg-white lg:hidden flex flex-col px-6 py-8 rounded-b-[10px] overflow-hidden -mt-2">
        <div className="text-center space-y-5 h-[12rem] overflow-y-auto scroll">
          <h3 className="font-semibold text-xl">{data?.role}</h3>

          <p className="break-words text-base font-semibold">
            {data?.description}
          </p>
        </div>
        <div className="flex items-center justify-center mt-auto gap-4">
          {data?.whatsapp?.length ? (
            <Link target="_blank" href={`https:wa.me/${data?.whatsapp}`}>
              <Image src={WhatsappIcon} alt="Whatsapp icon" />
            </Link>
          ) : (
            ""
          )}
          {data?.linkedin?.length ? (
            <Link target="_blank" href={data?.linkedin}>
              <Image src={LinkedinIcon} alt="Linkedin icon" />
            </Link>
          ) : (
            ""
          )}
          {data?.instagram?.length ? (
            <Link target="_blank" href={data?.instagram}>
              <Image src={InstagramBlackIcon} alt="Instagram icon" />
            </Link>
          ) : (
            ""
          )}
          {data?.tiktok?.length ? (
            <Link target="_blank" href={data?.tiktok}>
              <Image src={TiktokBlackIcon} alt="Tiktok icon" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
    //  <div className="bg-white overflow-hidden rounded-x px-8 sm:px-16 py-12 flex lg:flex-row flex-col-reverse gap-12 lg:gap-0 items-start justify-between">
    //   <div className="overflow-hidden">
    //     <h2 className="text-[36px] font-semibold">{data?.name}</h2>
    //     <h3 className="text-[20px] font-semibold">{data?.role}</h3>
    //     <p className="overflow-hidden text-[20px] mt-8">{data?.description}</p>
    //     <div className="flex items-center mt-10 gap-4">
    //       {data?.whatsapp?.length ? (
    //         <Link href={`https://wa.me/${data?.whatsapp}`}>
    //           <Image src={WhatsappIcon} alt="Whatsapp icon" />
    //         </Link>
    //       ) : (
    //         ""
    //       )}
    //       {data?.linkedin?.length ? (
    //         <Link href={data?.linkedin}>
    //           <Image src={LinkedinIcon} alt="Linkedin icon" />
    //         </Link>
    //       ) : (
    //         ""
    //       )}
    //       {data?.instagram?.length ? (
    //         <Link href={data?.instagram}>
    //           <Image src={InstagramBlackIcon} alt="Instagram icon" />
    //         </Link>
    //       ) : (
    //         ""
    //       )}
    //       {data?.tiktok?.length ? (
    //         <Link href={data?.tiktok}>
    //           <Image src={TiktokIcon} alt="Tiktok icon" />
    //         </Link>
    //       ) : (
    //         ""
    //       )}
    //     </div>
    //   </div>

    // </div>
  );
};

export default TeamCard;
