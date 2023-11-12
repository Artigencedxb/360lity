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
import { useEditContact } from "../../api/contactus";
import { Contact } from "../../types/contact";

const ProjectSchema = z.object({
  phone: z.string().min(1, "Please enter a contact phone number"),
  whatsapp: z.string().min(2, "Please enter a whatsapp phone number"),
  email: z
    .string()
    .min(3, "Please enter a email")
    .email("Please enter a valid email address"),
  image: z.string().optional(),
});

type ProjectSchemaType = z.infer<typeof ProjectSchema>;

const ContactusForm: React.FC<{ initialValues?: Contact }> = ({
  initialValues,
}) => {
  console.log(initialValues, "initial");

  const router = useRouter();
  const { mutate: edit, isPending: editLoader } = useEditContact();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = editLoader;
  const queryClient = useQueryClient();
  const buttonText = "Edit Contact Details";
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
            toast.success("Contact details updated.");
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
        preset: "Contact",
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
      folder: "contact",
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
            alt="contact image"
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
            <div className="text-sm text-gray-400 mt-2 ml-7">
              (250px x 144px)
            </div>
          </div>
        )}
        <Input
          id={"email"}
          name="email"
          register={register}
          label="Email"
          error={errors?.email?.message}
          className="w-full"
        />

        <Input
          id={"phone"}
          name="phone"
          register={register}
          label="Phone number"
          error={errors?.phone?.message}
          className="w-full"
        />
        <TextArea
          id={"whatsapp"}
          name="whatsapp"
          register={register}
          label="Whatsapp Number"
          error={errors?.whatsapp?.message}
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

export default ContactusForm;
