import { Logo } from "@/assets";
import Image from "next/image";
import React from "react";
import MapSlider from "./Map-Slider";
import Header from "@/common/Header";

const Explore = () => {
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Explore" />
      <div className="mt-5">
        <p className="text-sm font-medium">Embark on a Journey of Discovery</p>
        <p className="text-sm font-medium">
          We 360lity, are on a relentless quest to unearth extraordinary places
          and bring their 360° reality to the world. Our mission is to immerse
          you in the ambiance and beauty of these places without the need for a
          physical visit. We eagerly await your valuable comments and
          engagement. Thank you for joining us on this remarkable journey.
        </p>
      </div>
      <MapSlider />
    </div>
  );
};

export default Explore;
