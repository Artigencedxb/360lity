"use client";
import { LogoMain, LogoNavigation, LogoText, LogoView } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import Triangle from "./Triangle";
import { NavigationData } from "@/data/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants, useCycle } from "framer-motion";
import { useDetectClickOutside } from "react-detect-click-outside";

const Navigation = () => {
  const [viewMore, setViewMore] = useState(false);
  const router = useRouter();
  const ref = useDetectClickOutside({ onTriggered: () => setViewMore(false) });
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
                    onClick={() => clickHandler(el?.href)}
                    className="bg-[#73CCFF] w-[140px] flex items-center text-sm font-medium justify-center gap-2.5 px-5 py-2.5 rounded-[10px]"
                  >
                    {el?.label}
                    <Image
                      src={LogoNavigation}
                      className="ml-auto"
                      alt=""
                      width={20}
                    />
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
