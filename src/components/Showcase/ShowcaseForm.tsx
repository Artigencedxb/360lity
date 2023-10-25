"use client";
import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/UI/Input";
import TextArea from "@/UI/TextArea";
import Button from "@/UI/Button";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";

const ShowcaseSchema = z.object({
  name: z.string().min(1, "Please enter a showcase name"),
  link: z.string().min(3, "Please enter a 360 video link for showcase"),
  image: z.string().min(3, "Please upload a showcase photo"),
});

type ShowcaseSchemaType = z.infer<typeof ShowcaseSchema>;

const ShowcaseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShowcaseSchemaType>({ resolver: zodResolver(ShowcaseSchema) });

  const onSubmit: SubmitHandler<ShowcaseSchemaType> = (data) =>
    console.log(data);
  return (
    <div className="mt-10 max-w-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
        action=""
      >
        <div>
          <label
            className="bg-[#0060E4] flex items-center w-40 gap-2 cursor-pointer text-sm justify-center rounded-x text-white font-semibold px-5 py-3"
            htmlFor="image"
          >
            <ArrowUpTrayIcon className="w-5 h-5" /> Upload image
          </label>
          <Input
            id={"image"}
            name="image"
            register={register}
            label="Showcase image"
            error={errors?.image?.message}
            className="w-full hidden"
            type="file"
          />
        </div>
        <Input
          id={"name"}
          name="name"
          register={register}
          label="Showcase name"
          error={errors?.name?.message}
          className="w-full"
        />

        <Input
          id={"link"}
          name="link"
          register={register}
          label="360 video link"
          error={errors?.link?.message}
          className="w-full"
        />

        <Button type="submit" text="Add Showcase" />
      </form>
    </div>
  );
};

export default ShowcaseForm;
