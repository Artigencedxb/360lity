import React from "react";

const MailForm = () => {
  return (
    <div className="basis-[30%] self-stretch w-full h-full">
      <form
        action=""
        className="flex flex-col justify-between h-full gap-4 md:gap-0"
      >
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
        <button className="rounded-[15px] w-[150px] bg-[#0060E4] font-medium py-3 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MailForm;
