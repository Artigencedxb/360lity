"use client";
import { Logo, LogoView, LogoWhite } from "@/assets";
import Header from "@/common/Header";
import Triangle from "@/common/Triangle";
import { AboutusData } from "@/data/Aboutus";
import Image from "next/image";
import { useGetAbout } from "../../api/about";
import * as DOMPurify from "dompurify";

function htmlDecode(content: string) {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const Aboutus = () => {
  const desc =
    AboutusData?.description1! +
    AboutusData?.description2! +
    AboutusData?.description3 +
    AboutusData?.description4;
  ("");

  const listData = [AboutusData?.list1, AboutusData?.list2, AboutusData?.list3];

  const { data, isPending } = useGetAbout();

  const about = data?.data?.about;

  const description = htmlDecode(about?.description as string);

  const clean = DOMPurify.sanitize(description as string);

  console.log(clean, "clean");

  if (about) {
    return (
      <div className="py-[4.3rem] md:py-10 space-y-5">
        <Header heading="About us" />

        {!about?.image?.length ? (
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
                  {about?.title ?? ""}
                </h1>
              </div>
              <div className=" md:ml-auto relative basis-full w-full h-full md:w-[18rem] md:h-[12rem] md:basis-[30%]">
                <Image
                  src={about?.image as string}
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
                  {about?.title ?? ""}
                </h1>
              </div>
              <div className="overlay relative md:ml-auto w-full h-[13rem]">
                <Image
                  src={about?.image as string}
                  alt="blog image"
                  fill
                  className="rounded-[10px]"
                />
              </div>
            </div>
          </>
        )}
        <div className="bg-white rounded-x px-12 py-8">
          <div dangerouslySetInnerHTML={{ __html: clean }} />
          {/* <div className="text-sm font-semibold whitespace-pre-wrap">
          {blog?.title}
        </div>
        <div className="text-sm font-normal whitespace-pre-wrap">{desc}</div>
        <div className="text-sm font-normal whitespace-pre-wrap">{conc}</div> */}
        </div>
      </div>
    );
  }
  return null;
};

export default Aboutus;
