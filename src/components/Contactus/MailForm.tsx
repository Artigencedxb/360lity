"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../UI/Input";
import Loader from "../../UI/Loader";
import TextArea from "../../UI/TextArea";
import ContactSubmitModal from "../Modal/ContactSubmitForm";
import { toast } from "sonner";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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
  const [modal, setModal] = useState(false);
  // const imageloader = uploadLoader || deleteLoader;
  // const loader = editLoader;
  // const queryClient = useQueryClient();
  const buttonText = "Edit Contact Details";

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<mailSchemaType>({
    resolver: zodResolver(mailSchema),
  });

  const dirties = Object.keys(errors).length === 0;
  console.log(dirties, "dirty");
  const onSubmit: SubmitHandler<mailSchemaType> = (data) => {
    setLoading(true);
    console.log(data, "data");

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
          toast.success(
            "Contact details submitted successfully. Our executive will get back to you soon.");
          reset();
          console.log(result, "res");
          console.log(result.text);
          setLoading(false);
          setModal(false);
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
        {/* <ContactSubmitModal
          loading={loading}
          onClose={(e) => {
            e.preventDefault;
            setModal(false);
          }}
          onClick={onSubmit as any}
          open={modal}
        /> */}
        <Input
          id={"name"}
          name="name"
          label={"Name/Company"}
          register={register}
          placeholder="Name/Company"
          className="outline-none py-3 px-5 bg-white rounded-x"
          error={errors?.name?.message}
        />
        <Input
          id={"email"}
          name="email"
          label={"E-mail"}
          register={register}
          placeholder="E-mail"
          className="outline-none py-3 px-5 bg-white rounded-x"
          error={errors?.email?.message}
          autoComplete="off"
        />
        <Controller
          name="whatsapp"
          control={control}
          render={({ field }) => {
            return (
              <PhoneInput
                id={"phone"}
                name="whatsapp"
                label={"Phone Number"}
                defaultCountry="AE"
                placeholder="WhatsApp number"
                value={field.value}
                onChange={field.onChange}
                className="outline-none py-3 px-5 bg-white rounded-x"
                autoComplete="off"
              />
            );
          }}
        />
        {errors?.whatsapp && (
          <div className="text-red-700 text-sm font-medium">
            {errors?.whatsapp?.message}
          </div>
        )}
        <TextArea
          id={"description"}
          name="description"
          label={"Description"}
          register={register}
          placeholder="Description"
          className="py-3 px-5 bg-white rounded-x"
          error={errors?.description?.message}
          rows={5}
        />
        <button
          type={"submit"}
          // onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          //   e.preventDefault();
          //   trigger();
          //   if (dirties) setModal(true);
          // }}
          disabled={loading}
          className="flex disabled:opacity-75 items-center gap-3 justify-center rounded-x w-[150px] bg-[#0060E4] font-medium py-3 text-white"
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
