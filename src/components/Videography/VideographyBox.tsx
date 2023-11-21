"use client";
import cn from "classnames";
import { LottieOptions, useLottie } from "lottie-react";
import Image from "next/image";
import React, { useState } from "react";
import animation from "../../../public/animation-white.json";
import { Videography } from "../../types/videography";
import { get_youtube_thumbnail } from "../../utils/getYoutubeThumbnail";
import { FullScreenIcon } from "../../assets/360-view";
import VideoFullScreen from "./VideoFullScreen";

const VideographyBox: React.FC<{
  className?: string;
  data: Videography;
  index?: number;
  admin?: boolean;
}> = ({ className, index, data, admin = false }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const options: LottieOptions = {
    animationData: animation,
    loop: true,
    width: 100,
  };
  const { View } = useLottie(options);
  //   var youtube_video_id = data?.link?.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)!.pop();
  const video_thumbnail = get_youtube_thumbnail(data?.link, "high");
  //   let video_thumbnail = ""
  //   if (data?.link.length == 11) {
  //     video_thumbnail = `https://img.youtube.com/vi/${youtube_video_id}/0.jpg`;
  // }

  return (
    <>
      <div
        className={cn(
          "group transition-all relative min-h-[13rem] group overflow-hidden inline-block",
          className
        )}
      >
        {fullScreen && (
          <VideoFullScreen
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
            link={data?.link}
          />
        )}
        {video_thumbnail?.length ? (
          <div className="block transition-all duration-300 group-hover:bg-black/30">
            <Image
              src={video_thumbnail}
              fill
              className="object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
              alt="photography"
            />
          </div>
        ) : (
          ""
        )}
        <div className="hidden group-hover:block absolute bottom-4 right-4">
          <button
            className="outline-none bg-black/50 rounded-full w-[30px] h-[30px] flex items-center justify-center"
            onClick={() => setFullScreen((prev) => !prev)}
          >
            <Image
              width={12}
              height={12}
              src={FullScreenIcon}
              alt="Reduce size icon"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideographyBox;
