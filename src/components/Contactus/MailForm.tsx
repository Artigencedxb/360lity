"use client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Input from "../../UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../../UI/TextArea";
import classNames from 'classnames';

const mailSchema = z.object({
  name: z.string().min(1, "Please enter a name"),
  whatsapp: z.string().min(2, "Please enter a whatsapp phone number"),
  email: z
    .string()
    .min(3, "Please enter a email")
    .email("Please enter a valid email address"),
  description: z.string().optional(),
});
type mailSchemaType = z.infer<typeof mailSchema>;
const MailForm = () => {
  // const imageloader = uploadLoader || deleteLoader;
  // const loader = editLoader;
  // const queryClient = useQueryClient();
  const buttonText = "Edit Contact Details";

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<mailSchemaType>({
    resolver: zodResolver(mailSchema),
  });

  const onSubmit: SubmitHandler<mailSchemaType> = (data) => {};
  return (
    <div className="basis-[30%] self-stretch w-full h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full gap-4 md:gap-2"
      >
        <Input
          id={"name"}
          name="name"
          label={"Name/Company"}
          register={register}
          placeholder="Name/Company"
          className="outline-none py-3 px-5 bg-white rounded-[15px]"
          error={errors?.name?.message}
        />
        <Input
          id={"email"}
          name="email"
          label={"E-mail"}
          register={register}
          placeholder="E-mail"
          className="outline-none py-3 px-5 bg-white rounded-[15px]"
          error={errors?.email?.message}
        />
        <Input
          id={"whatsapp"}
          name="whatsapp"
          label={"WhatsApp No"}
          register={register}
          placeholder="WhatsApp No"
          className="outline-none py-3 px-5 bg-white rounded-[15px]"
          error={errors?.whatsapp?.message}
        />
        <TextArea
          id={"description"}
          name="description"
          label={"Description"}
          register={register}
          placeholder="Description"
          className="py-3 px-5 bg-white rounded-[15px]"
          error={errors?.description?.message}
          rows={5}
          cols={23}
        />
        <button className="rounded-[15px] w-[150px] bg-[#0060E4] font-medium py-3 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MailForm;
