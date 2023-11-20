import Image from "next/image";
import React from "react";

const MediaCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-white px-5 py-6 rounded-x">
      <div className="self-center w-full relative h-[360px] bg-[#D9D9D9] rounded-x">
        {/* {(
        <Image src={data?.image} alt={data?.name} className="object-cover rounded-x" fill />
      )} */}
      </div>
      <div className="font-semibold text-[22px] mt-4 text-center">{title}</div>
    </div>
  );
};

export default MediaCard;
