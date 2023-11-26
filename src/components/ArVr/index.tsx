"use client";
import { Logo, LogoView, LogoWhite, ShareIcon } from "@/assets";
import Header from "@/common/Header";
import Triangle from "@/common/Triangle";
import Image from "next/image";
import * as DOMPurify from "dompurify";
import { useGetArVr } from "@/api/arvr";
import animation from "../../../public/animation.json";
import { useLottie } from "lottie-react";

function htmlDecode(content: string) {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const ArVr = () => {
  const { data, isPending } = useGetArVr();

  const arvr = data?.data?.arvr;

  const description1 = htmlDecode(arvr?.description1 as string);
  const description2 = htmlDecode(arvr?.description2 as string);

  const clean1 = DOMPurify.sanitize(description1 as string);
  const clean2 = DOMPurify.sanitize(description2 as string);

  const shareData = {
    title: "VR/AR",
    url: `${window.location.origin}/arvr`,
  };

  const shareButton = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  if (arvr) {
    return (
      <div className="py-[4.3rem] md:py-10 space-y-5">
        <Header heading="XVT" />
        {isPending && <div>{View}</div>}
        {!arvr?.image?.length ? (
          <div className="bg-black rounded-[10px] relative w-full py-20 flex items-center justify-center">
            <Image src={LogoWhite} alt="" />
            <Triangle />
          </div>
        ) : (
          <>
            <div className="hidden rounded-[10px] w-full relative md:flex flex-col md:flex-row items-center justify-center">
              <Triangle />
              <div className="fade-effect md:absolute w-full z-[1000] top-0 left-0 md:w-[100%] lg:w-[100%] h-full self-stretch md:flex items-center py-10 rounded-x">
                <h1 className="text-3xl md:text-5px text-white pl-12 w-[70%]">
                  {arvr?.title ?? ""}
                </h1>
              </div>
              <div className=" md:ml-auto relative basis-full w-full h-full md:w-[18rem] md:h-[12rem] md:basis-[30%]">
                <Image
                  src={arvr?.image as string}
                  alt="blog image"
                  fill
                  className="rounded-tr-[10px] img-effect rounded-br-[10px]"
                />
              </div>
              {/* <Image src={LogoWhite} alt="" /> */}
            </div>
            <div className="md:hidden relative">
              <div className="w-full justify-center flex absolute z-[3000] top-0 left-0 h-full self-stretch items-center py-10 rounded-bl-[10px]">
                <h1 className="text-base md:text-5px text-white pl-12 w-[70%]">
                  {arvr?.title ?? ""}
                </h1>
              </div>
              <div className="overlay relative md:ml-auto w-full h-[13rem]">
                <Image
                  src={arvr?.image as string}
                  alt="blog image"
                  fill
                  className="rounded-[10px]"
                />
              </div>
            </div>
          </>
        )}

        <div className="bg-white rounded-x py-8 px-12 flex flex-col space-y-14">
          <div className="flex justify-between items-center gap-10 flex-col-reverse lg:flex-row">
            <div className="lg:basis-[50%]">
              <div
                className="text-sm font-normal text-justify whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: clean1 }}
              ></div>
              {/* {XVTData?.description?.map((el) => {
              if (el?.id <= 5)
                return (
                  <div
                    key={el?.id}
                    className="text-sm font-normal text-justify whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: el?.desc }}
                  />
                );
            })} */}
            </div>
            <div className="lg:basis-[50%] relative w-full lg:w-[288px] h-[400px]">
              {arvr?.descImage1?.length ? (
                <Image
                  fill
                  src={arvr?.descImage1}
                  className="object-cover rounded-x"
                  alt="VR/AR Image"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex lg:flex-row-reverse justify-between items-center gap-10 flex-col-reverse">
            <div className="lg:basis-[50%]">
              {description2 &&
                description2 != undefined &&
                description2?.length && (
                  <div
                    className="text-sm font-normal text-justify whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: clean2 }}
                  ></div>
                )}
              {/* {XVTData?.description?.map((el) => {
              if (el?.id > 5)
                return (
                  <div
                    key={el?.id}
                    className="text-sm font-normal text-justify whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: el?.desc }}
                  />
                );
            })} */}
            </div>
            <div className="lg:basis-[50%] relative w-full lg:w-[288px] h-[400px]">
              {arvr?.descImage2?.length ? (
                <Image
                  fill
                  src={arvr?.descImage2}
                  className="object-cover rounded-x"
                  alt="VR/AR Image"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ArVr;
