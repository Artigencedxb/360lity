"use client";
import cn from "classnames";
import { LottieOptions, useLottie } from "lottie-react";
import Image from "next/image";
import React, { useState } from "react";
import animation from "../../../public/animation-white.json";
import { FullScreenIcon } from "../../assets/360-view";
import VideoFullScreen from "../../common/VideoFullScreen";
import { Animation } from "../../types/animation";
import { get_youtube_thumbnail } from "../../utils/getYoutubeThumbnail";
import { useRouter } from "next/navigation";
import { youtubeIdParser } from "../../utils/youtubeIdParser";

const AnimationBox: React.FC<{
  className?: string;
  data: Animation;
  index?: number;
  admin?: boolean;
}> = ({ className, index, data, admin = false }) => {
  const router = useRouter();
  const options: LottieOptions = {
    animationData: animation,
    loop: true,
    width: 100,
  };
  const { View } = useLottie(options);
  const youtube_video_id = youtubeIdParser(data?.link);
  console.log(youtube_video_id, "id");
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
            onClick={() => router.push(`/videography/${youtube_video_id}`)}
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

export default AnimationBox;
