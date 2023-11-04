"use client";
import Button from "@/UI/Button";
import ImagePreview from "@/UI/ImagePreview";
import Input from "@/UI/Input";
import Loader from "@/UI/Loader";
import TextArea from "@/UI/TextArea";
import { useDelete, useUpload } from "@/api/image";
import { useCreateProject, useEditProject } from "@/api/project";
import { Project } from "@/types/project";
import { resizeFile } from "@/utils/resizeFile";
import { transformFile } from "@/utils/transformFile";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ProjectSchema = z.object({
  name: z.string().min(1, "Please enter a project name"),
  link: z.string().min(3, "Please enter a 360 video link for project"),
  description: z.string().min(3, "Please enter a description"),
  image: z.string().optional(),
});

type ProjectSchemaType = z.infer<typeof ProjectSchema>;

const ProjectForm: React.FC<{ initialValues?: Project }> = ({
  initialValues,
}) => {
  console.log(initialValues, "initial");

  const router = useRouter();
  const { mutate: create, isPending: createLoader } = useCreateProject();
  const { mutate: edit, isPending: editLoader } = useEditProject();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = createLoader || editLoader;
  const queryClient = useQueryClient();
  const buttonText = initialValues ? "Edit Project" : "Add Project";
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProjectSchemaType>({
    resolver: zodResolver(ProjectSchema),
  });

  useEffect(() => {
    if (initialValues) {
      reset({ ...initialValues });
    }
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<ProjectSchemaType> = (data) => {
    if (initialValues) {
      edit(
        {
          ...data,
          id: initialValues?._id,
          ...(data?.image?.length ? { image: data?.image } : { image: null }),
        },
        {
          onSuccess: (res) => {
            toast.success("Project updated.");
          },
        }
      );
    } else {
      create(
        {
          ...data,
          ...(data?.image?.length ? { image: data?.image } : { image: null }),
        },
        {
          onSuccess: (res) => {
            toast.success("New project added.");
            router.replace("/admin/projects");
          },
        }
      );
    }
  };

  const imageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let formData = new FormData();

    const imageFile = e.target.files?.[0];

    const imgValue = await transformFile(imageFile as File);

    if (imgValue) {
      console.log(imgValue, "img");
      formData.append("image", imageFile!);

      const data = {
        image: imgValue,
        preset: "Project",
      };

      upload(data, {
        onSuccess: (res) => {
          console.log(res, "res");
          const imgUrl = res?.data?.secure_url;
          setValue("image", imgUrl);
        },
      });
    }
  };

  const deleteHandler = () => {
    const imgValue = getValues("image");
    const data = {
      image: imgValue,
      folder: "projects",
    };

    deleteImage(data, {
      onSuccess: (res) => {
        console.log(res, "res");
        setValue("image", "");
      },
    });
  };

  return (
    <div className="mt-10 max-w-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
        action=""
      >
        {imageloader ? (
          <div className="flex justify-center py-6 w-[45%]">
            <Loader className="w-9 h-9" />
          </div>
        ) : watch("image")?.length ? (
          <ImagePreview
            src={watch("image") as string}
            alt="project"
            deleteHandler={deleteHandler}
          />
        ) : (
          <div>
            <label
              className="bg-[#0060E4] flex items-center w-40 gap-2 cursor-pointer text-sm justify-center rounded-x text-white font-semibold px-5 py-3"
              htmlFor="image"
            >
              <ArrowUpTrayIcon className="w-5 h-5" /> Upload image
            </label>
            <input
              id={"image"}
              onChange={imageHandler}
              name="image"
              className="w-full hidden"
              type="file"
            />
            {errors?.image && (
              <p className="text-red-700 text-sm font-medium mt-3">
                {errors?.image?.message}
              </p>
            )}
          </div>
        )}
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
        <Button
          loading={loader}
          disabled={loader || imageloader}
          type="submit"
          text={buttonText}
        />
      </form>
    </div>
  );
};

export default ProjectForm;
