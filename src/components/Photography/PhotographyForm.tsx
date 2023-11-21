"use client";
import Button from "@/UI/Button";
import ImagePreview from "@/UI/ImagePreview";
import Loader from "@/UI/Loader";
import { useDelete, useUpload } from "@/api/image";
import { transformFile } from "@/utils/transformFile";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { convert } from "html-to-text";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { z } from "zod";
import { useEditAbout } from "../../api/about";
import { About } from "../../types/about";
import "react-quill/dist/quill.snow.css";
import Input from "../../UI/Input";

import dynamic from "next/dynamic";
import { useEditXvt } from "@/api/xvt";
import { Xvt } from "@/types/xvt";
import { Photography } from "../../types/photography";
import {
  useCreatePhotography,
  useEditPhotography,
} from "../../api/photography";

const XvtSchema = z.object({
  image: z.string({ required_error: "Please upload a image" }),
});

type XvtSchemaType = z.infer<typeof XvtSchema>;

const PhotographyForm: React.FC<{ initialValues?: Photography }> = ({
  initialValues,
}) => {
  const router = useRouter();
  const { mutate: create, isPending: createLoader } = useCreatePhotography();
  const { mutate: edit, isPending: editLoader } = useEditPhotography();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = editLoader || createLoader;
  const buttonText = initialValues ? "Update" : "Add Photo";
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm<XvtSchemaType>({
    resolver: zodResolver(XvtSchema),
    mode: "onChange",
    defaultValues: { ...initialValues },
  });

  const onSubmit: SubmitHandler<XvtSchemaType> = (data) => {
    console.log(data, "data");

    if (initialValues) {
      edit(
        {
          ...data,
          id: initialValues?._id,
          ...(data?.image?.length ? { image: data?.image } : { image: null }),
        },
        {
          onSuccess: (res) => {
            toast.success("Photo updated");
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
            toast.success("Photo added");
            router.replace("/admin/photography");
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
        preset: "photography",
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
      folder: "xvt",
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
            <Loader />
          </div>
        ) : watch("image")?.length ? (
          <ImagePreview
            src={watch("image") as string}
            alt="xvt"
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

export default PhotographyForm;
