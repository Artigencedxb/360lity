import { Logo } from "@/assets";
import Image from "next/image";
import React from "react";
import ContactusCard from "./ContactusCard";
import ContactusForm from "./ContactusForm";

const Contactus = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="" />
        <h1>Contact Us</h1>
      </div>
      <div className="md:flex-row flex-col flex items-center gap-4 mt-5">
        <ContactusCard />
        <ContactusForm />
      </div>
    </div>
  );
};

export default Contactus;
