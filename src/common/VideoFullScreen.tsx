"use client";
import Image from "next/image";
import React from "react";
import { FullScreenIcon, ReduceIcon } from "../assets/360-view";
import { useRouter } from "next/navigation";
import Header from "./Header";

const VideoFullScreen: React.FC<{
  videoId: string;
}> = ({ videoId }) => {
  const router = useRouter();
  return (
    <div className="py-[4.3rem] md:py-10 space-y-5">
      <Header heading="Video" />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        name="360lity"
        width="100%"
        height="100%"
        className="h-[50vh] lg:h-screen"
        allowFullScreen
      />
      {/* <div className="absolute bottom-4 right-4 flex flex-col gap-6">
        <button
          className="outline-none bg-black/50 rounded-full w-[50px] h-[50px] flex items-center justify-center"
          onClick={() => router.back()}
        >
          <Image
            width={23}
            height={23}
            src={ReduceIcon}
            alt="Reduce size icon"
          />
        </button>
      </div> */}
    </div>
  );
};

export default VideoFullScreen;
