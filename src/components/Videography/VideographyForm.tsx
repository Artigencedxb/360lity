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
import { useEditPhotography } from "../../api/photography";
import {
  useCreateVideography,
  useEditVideography,
} from "../../api/Videography";
import { Videography } from "../../types/videography";

const XvtSchema = z.object({
  link: z.string({ required_error: "Please enter a video link" }),
});

type XvtSchemaType = z.infer<typeof XvtSchema>;

const VideographyForm: React.FC<{ initialValues?: Videography }> = ({
  initialValues,
}) => {
  const router = useRouter();

  const { mutate: create, isPending: createLoader } = useCreateVideography();
  const { mutate: edit, isPending: editLoader } = useEditVideography();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = editLoader || createLoader;
  const buttonText = initialValues ? "Update" : "Add video";
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
        },
        {
          onSuccess: (res) => {
            toast.success("Video updated");
          },
        }
      );
    } else {
      create(
        {
          ...data,
        },
        {
          onSuccess: (res) => {
            toast.success("Photo added");
            router.replace("/admin/videography");
          },
        }
      );
    }
  };

  return (
    <div className="mt-10 max-w-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
        action=""
      >
        <Input
          id={"link"}
          name="link"
          register={register}
          label="Video link"
          error={errors?.link?.message}
          className="w-full"
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

export default VideographyForm;
