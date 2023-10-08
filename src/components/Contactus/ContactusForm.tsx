import React from "react";

const ContactusForm = () => {
  return (
    <div className="self-start w-full h-full">
      <form action="" className="flex flex-col gap-6 h-full">
        <input
          placeholder="Name/Company"
          className="outline-none py-3 px-5 bg-white rounded-[15px]"
        />
        <input
          placeholder="E-mail"
          className="outline-none py-3 px-5 bg-white rounded-[15px]"
        />
        <input
          placeholder="WhatsApp No"
          className="outline-none py-3 px-5 bg-white rounded-[15px]"
        />
        <textarea
          placeholder="Description"
          className="py-3 px-5 bg-white rounded-[15px]"
          rows={5}
        />
        <button className="rounded-[15px] bg-[#0060E4] font-medium py-3 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactusForm;
