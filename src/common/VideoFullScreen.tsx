"use client";
import Image from "next/image";
import React from "react";
import { FullScreenIcon, ReduceIcon } from "../assets/360-view";

const VideoFullScreen: React.FC<{
  link: string;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  fullScreen: boolean;
}> = ({ link, fullScreen, setFullScreen }) => {
  return (
    <div className="fixed top-0 right-0 z-[2000]">
      <iframe
        src={link}
        name="360lity"
        width="100%"
        height="100%"
        className="h-screen"
        allowFullScreen
      />
      <div className="absolute bottom-4 right-4 flex flex-col gap-6">
        <button
          className="outline-none bg-black/50 rounded-full w-[50px] h-[50px] flex items-center justify-center"
          onClick={() => setFullScreen((prev) => !prev)}
        >
          <Image
            width={23}
            height={23}
            src={!fullScreen ? FullScreenIcon : ReduceIcon}
            alt="Reduce size icon"
          />
        </button>
      </div>
    </div>
  );
};

export default VideoFullScreen;
