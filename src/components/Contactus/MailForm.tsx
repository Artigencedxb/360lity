"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Input from "../../UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../../UI/TextArea";
import emailjs from "@emailjs/browser";
import classNames from "classnames";
import Loader from "../../UI/Loader";

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
  const [loading, setLoading] = useState(false);
  // const imageloader = uploadLoader || deleteLoader;
  // const loader = editLoader;
  // const queryClient = useQueryClient();
  const buttonText = "Edit Contact Details";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<mailSchemaType>({
    resolver: zodResolver(mailSchema),
  });

  const onSubmit: SubmitHandler<mailSchemaType> = (data) => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          from_name: data?.name,
          whatsapp: data?.whatsapp,
          email: data?.email,
          ...(data?.description?.length && { message: data?.description }),
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result, "res");
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };
  return (
    <div className="self-stretch">
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
        />
        <button
          disabled={loading}
          className="flex disabled:opacity-75 items-center gap-3 justify-center rounded-[15px] w-[150px] bg-[#0060E4] font-medium py-3 text-white"
        >
          {loading && (
            <Loader className="border-[2px] border-t-white w-[16px] h-[16px]" />
          )}
          Submit
        </button>
      </form>
    </div>
  );
};

export default MailForm;
