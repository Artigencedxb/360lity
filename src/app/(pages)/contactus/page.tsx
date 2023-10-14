import Contactus from "@/components/Contactus";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

const ContactusPage = () => {
  return <Contactus />;
};

export default ContactusPage;
