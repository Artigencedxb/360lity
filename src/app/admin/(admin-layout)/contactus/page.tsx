"use client";
import React from "react";
import { useGetContact } from "../../../../api/contactus";
import ContactusForm from "@/components/Contactus/ContactusForm";
import Header from "../../../../common/Header";

const ContactUsAdminpage = () => {
  const { data } = useGetContact();

  if (data) {
    return (
      <div className="pb-10">
        {" "}
        <Header heading="Contact us" back={false} />{" "}
        <ContactusForm initialValues={data?.data?.contact} />
      </div>
    );
  }
  return null;
};

export default ContactUsAdminpage;
