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
import React, { useRef } from "react";
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
import { ArVr } from "@/types/arvr";
import { useEditArVr } from "@/api/arvr";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const ArVrSchema = z.object({
  title: z.string().min(1, "Please enter a title"),
  description: z.string().min(3, "Please enter a description"),
  image: z.string().optional(),
  descImage1: z.string().optional(),
  descImage2: z.string().optional(),
});

type ArVrSchemaType = z.infer<typeof ArVrSchema>;

function htmlDecode(content: string) {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const ArVrForm: React.FC<{ initialValues: ArVr }> = ({ initialValues }) => {
  const router = useRouter();
  const decodeValue = htmlDecode(initialValues?.description as string);
  const text = convert(decodeValue as string);

  const { mutate: edit, isPending: editLoader } = useEditArVr();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = editLoader;
  const buttonText = "Update VR/AR details";
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm<ArVrSchemaType>({
    resolver: zodResolver(ArVrSchema),
    mode: "onChange",
    defaultValues: { ...initialValues, description: text },
  });

  const onSubmit: SubmitHandler<ArVrSchemaType> = (data) => {
    if (initialValues) {
      edit(
        {
          ...data,
          id: initialValues?._id,
          ...(data?.image?.length ? { image: data?.image } : { image: null }),
        },
        {
          onSuccess: (res) => {
            toast.success("VR/AR details updated.");
          },
        }
      );
    }
  };

  const imageHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "image" | "descImage1" | "descImage2"
  ) => {
    let formData = new FormData();

    const imageFile = e.target.files?.[0];

    const imgValue = await transformFile(imageFile as File);

    if (imgValue) {
      console.log(imgValue, "img");
      formData.append("image", imageFile!);

      const data = {
        image: imgValue,
        preset: "ArVr",
      };

      upload(data, {
        onSuccess: (res) => {
          console.log(res, "res");
          const imgUrl = res?.data?.secure_url;
          setValue(field, imgUrl);
        },
      });
    }
  };

  const deleteHandler = () => {
    const imgValue = getValues("image");
    const data = {
      image: imgValue,
      folder: "arvr",
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                imageHandler(e, "image")
              }
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
        {imageloader ? (
          <div className="flex justify-center py-6 w-[45%]">
            <Loader />
          </div>
        ) : watch("descImage1")?.length ? (
          <ImagePreview
            src={watch("descImage1") as string}
            alt="xvt"
            deleteHandler={deleteHandler}
          />
        ) : (
          <div>
            <label
              className="bg-[#0060E4] flex items-center w-64 gap-2 cursor-pointer text-sm justify-center rounded-x text-white font-semibold px-5 py-3"
              htmlFor="descImage1"
            >
              <ArrowUpTrayIcon className="w-5 h-5" /> Upload description image
            </label>
            <input
              id={"descImage1"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                imageHandler(e, "descImage1")
              }
              name="descImage1"
              className="w-full hidden"
              type="file"
            />
            {errors?.image && (
              <p className="text-red-700 text-sm font-medium mt-3">
                {errors?.descImage1?.message}
              </p>
            )}
            <div className="text-sm text-gray-400 mt-2 ml-7">
              (288px x 208px)
            </div>
          </div>
        )}
        {imageloader ? (
          <div className="flex justify-center py-6 w-[45%]">
            <Loader />
          </div>
        ) : watch("descImage2")?.length ? (
          <ImagePreview
            src={watch("descImage2") as string}
            alt="xvt"
            deleteHandler={deleteHandler}
          />
        ) : (
          <div>
            <label
              className="bg-[#0060E4] flex items-center w-64 gap-2 cursor-pointer text-sm justify-center rounded-x text-white font-semibold px-5 py-3"
              htmlFor="descImage2"
            >
              <ArrowUpTrayIcon className="w-5 h-5" /> Upload description image
            </label>
            <input
              id={"descImage2"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                imageHandler(e, "descImage2")
              }
              name="descImage2"
              className="w-full hidden"
              type="file"
            />
            {errors?.image && (
              <p className="text-red-700 text-sm font-medium mt-3">
                {errors?.descImage2?.message}
              </p>
            )}
            <div className="text-sm text-gray-400 mt-2 ml-7">
              (288px x 208px)
            </div>
          </div>
        )}
        <Input
          id={"title"}
          name="title"
          register={register}
          label="title"
          error={errors?.title?.message}
          className="w-full"
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value, name } }) => {
            return (
              <QuillNoSSRWrapper
                className="bg-white rounded-x min-h-[250px]"
                theme="snow"
                value={value}
                defaultValue={initialValues?.description}
                onChange={onChange}
              ></QuillNoSSRWrapper>
            );
          }}
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

export default ArVrForm;
