"use client";
import { LogoMain, LogoNavigation, LogoText, LogoView } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Triangle from "./Triangle";
import { NavigationData } from "@/data/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useDetectClickOutside } from "react-detect-click-outside";
import animationWhite from "../../public/animation-white.json";
import Lottie from "lottie-react";

const Navigation = () => {
  const [viewMore, setViewMore] = useState(false);
  const [hover, setHover] = useState(0);
  const router = useRouter();
  const ref = useDetectClickOutside({ onTriggered: () => setViewMore(false) });
  // const options: LottieOptions = {
  //   animationData: animationWhite,
  //   loop: true,
  //   style: {
  //     backgroundColor: "#ffffff",
  //     width: "100%",
  //     height: "100%",
  //     display: "block",
  //     overflow: "hidden",
  //     transform: "translate3d(0,0,0)",
  //     textAlign: "center",
  //     opacity: 1,
  //   },
  // };
  // const { View } = useLottie(options);

  const variants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.07,
        staggerDirection: -1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeOut",
        duration: 1,
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    if (viewMore && hover === 0) {
      const timer = setTimeout(() => setViewMore(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [viewMore, hover]);

  const clickHandler = (link: string) => {
    // setViewMore(false);
    setViewMore(false);
    router?.push(link);
  };
  return (
    <div
      className="absolute z-30 top-0 right-0 px-[2rem] sm:px-[3rem] lg:px-[1.5rem] space-y-2"
      ref={ref}
    >
      <div className="bg-white w-[140px] h-[125px] p-7 relative rounded-bl-[10px] rounded-br-[10px] flex items-center justify-center">
        <Link href="/">
          <Image src={LogoText} alt="360 lity logo" />
        </Link>
        {/* <Triangle /> */}
      </div>

      <div>
        {!viewMore ? (
          <button
            onClick={() => setViewMore(true)}
            className="bg-[#73CCFF] w-full flex items-center text-sm font-medium justify-center gap-2.5 px-5 py-2.5 rounded-[10px]"
          >
            More
            <Image src={LogoNavigation} alt="" width={20} />
          </button>
        ) : (
          ""
        )}
        {
          <motion.div
            variants={variants}
            initial={true}
            animate={viewMore ? "open" : "closed"}
            className="flex flex-col gap-2"
          >
            {viewMore &&
              NavigationData?.map((el) => {
                return (
                  <motion.button
                    key={el?.id}
                    onMouseEnter={() => setHover(el?.id)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => clickHandler(el?.href)}
                    className="bg-[#73CCFF] hover:scale-105 transition-all font-medium duration-200 w-[140px] flex items-center text-sm justify-center gap-2.5 px-5 py-2.5 rounded-[10px]"
                  >
                    {el?.label}
                    <Image
                      src={LogoNavigation}
                      className="ml-auto"
                      alt=""
                      width={20}
                    />
                    {/* {hover === el?.id ? (
                      <Lottie
                        animationData={animationWhite}
                        autoplay={true}
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          overflow: "hidden",
                          transform: "translate3d(0,0,0)",
                          textAlign: "center",
                          opacity: 1,
                        }}
                      />
                    ) : (
                      <Image
                        src={LogoNavigation}
                        className="ml-auto"
                        alt=""
                        width={20}
                      />
                    )} */}
                  </motion.button>
                );
              })}
          </motion.div>
        }
      </div>
    </div>
  );
};

export default Navigation;
