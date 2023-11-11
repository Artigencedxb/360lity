"use client";
import React from "react";
import ContactusForm from "@/components/Contactus/ContactUsForm";
import { useGetContact } from "../../../../api/contactus";

const ContactUsAdminpage = () => {
  const { data } = useGetContact();

  if (data) {
    return <ContactusForm initialValues={data?.data?.contact} />;
  }
  return null;
};

export default ContactUsAdminpage;
