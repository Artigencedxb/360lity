import { Logo, LogoView, LogoWhite } from "@/assets";
import Triangle from "@/common/Triangle";
import { AboutusData } from "@/data/Aboutus";
import Image from "next/image";

const Aboutus = () => {
  const desc =
    AboutusData?.description1! +
    AboutusData?.description2! +
    AboutusData?.description3 +
    AboutusData?.description4;
  ("");

  const listData = [AboutusData?.list1, AboutusData?.list2, AboutusData?.list3];

  //   const conc = blog?.conclusion1! + blog?.conclusion2 ?? "";
  return (
    <div className="py-10 space-y-5">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="" />
        <h1>About us</h1>
      </div>

      <div className="bg-black rounded-[10px] relative w-full py-20 flex items-center justify-center">
        <Image src={LogoWhite} alt="" />
        <Triangle />
      </div>
      <div className="bg-white rounded-[15px] py-8 px-14">
        <div className="text-sm font-semibold whitespace-pre-wrap">
          {"About 360lity: Crafting Immersive Realities"}
        </div>
        <div
          className="text-sm font-normal whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <ul className="pl-4 mb-5">
          {listData?.map((el, index) => {
            return (
              <li
                key={index}
                className="list-disc text-sm"
                dangerouslySetInnerHTML={{ __html: el }}
              />
            );
          })}
        </ul>
        <div
          className="text-sm font-normal whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: AboutusData?.description5 }}
        />
      </div>
    </div>
  );
};

export default Aboutus;
