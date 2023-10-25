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

const ProjectSchema = z.object({
  name: z.string().min(1, "Please enter a project name"),
  link: z.string().min(3, "Please enter a 360 video link for project"),
  description: z.string().min(3, "Please enter a description"),
  image: z.string().min(3, "Please upload a project photo"),
});

type ProjectSchemaType = z.infer<typeof ProjectSchema>;

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectSchemaType>({ resolver: zodResolver(ProjectSchema) });

  const onSubmit: SubmitHandler<ProjectSchemaType> = (data) => {
    console.log(data);
  };
  console.log(errors, "errors");

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
            label="Project image"
            error={errors?.image?.message}
            className="w-full hidden"
            type="file"
          />
        </div>
        <Input
          id={"name"}
          name="name"
          register={register}
          label="Project name"
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
        <TextArea
          id={"description"}
          name="description"
          register={register}
          label="Description"
          error={errors?.description?.message}
          className="w-full"
          rows={4}
        />
        <Button type="submit" text="Add Project" />
      </form>
    </div>
  );
};

export default ProjectForm;
