"use client";
import { LogoNavigation, LogoText } from "@/assets";
import { NavigationData } from "@/data/navigation";
import { AnimatePresence, Variants, motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

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
  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: { opacity: 1 },
  };

  const sideVariants: Variants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  useEffect(() => {
    if (viewMore && hover === 0) {
      const timer = setTimeout(() => setViewMore(false), 8000);
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
      className="absolute z-[3000] top-0 right-0 px-[2rem] sm:px-[3rem] lg:px-[1.5rem] space-y-2"
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
          <AnimatePresence>
            <motion.div
              variants={sideVariants}
              initial={"closed"}
              animate={viewMore ? "open" : "closed"}
              className="flex flex-col gap-2"
            >
              {viewMore &&
                NavigationData?.map((el, index) => {
                  return (
                    <motion.button
                      key={index}
                      initial={"closed"}
                      variants={itemVariants}
                      animate={"open"}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08,
                        ease: [0.4, 0.6, 0.2, 1],
                        type: "tween",
                      }}
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
          </AnimatePresence>
        }
      </div>
    </div>
  );
};

export default Navigation;
