"use client";
import React from "react";
import { useGetContact } from "../../../../api/contactus";
import ContactusForm from "../../../../components/Contactus/ContactusForm";

const ContactUsAdminpage = () => {
  const { data } = useGetContact();

  if (data) {
    return <ContactusForm initialValues={data?.data?.contact} />;
  }
  return null;
};

export default ContactUsAdminpage;
