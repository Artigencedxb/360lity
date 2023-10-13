import { Logo } from "@/assets";
import Image from "next/image";
import React from "react";
import ContactusCard from "./ContactusCard";
import ContactusForm from "./ContactusForm";
import Header from "@/common/Header";

const Contactus = () => {
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Contact Us" />
      <div className="md:flex-row flex-col flex items-center gap-4 mt-5">
        <ContactusCard />
        <ContactusForm />
      </div>
    </div>
  );
};

export default Contactus;
