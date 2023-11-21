"use client";
import Button from "@/UI/Button";
import { useDelete, useUpload } from "@/api/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { z } from "zod";
import Input from "../../UI/Input";

import { useCreateAnimation, useEditAnimation } from "../../api/animation";
import { Animation } from "../../types/animation";

const AnimationSchema = z.object({
  link: z.string({ required_error: "Please enter a video link" }),
});

type AnimationSchemaType = z.infer<typeof AnimationSchema>;

const AnimationForm: React.FC<{ initialValues?: Animation }> = ({
  initialValues,
}) => {
  const router = useRouter();

  const { mutate: create, isPending: createLoader } = useCreateAnimation();
  const { mutate: edit, isPending: editLoader } = useEditAnimation();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = editLoader || createLoader;
  const buttonText = initialValues ? "Update" : "Add animation";
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm<AnimationSchemaType>({
    resolver: zodResolver(AnimationSchema),
    mode: "onChange",
    defaultValues: { ...initialValues },
  });

  const onSubmit: SubmitHandler<AnimationSchemaType> = (data) => {
    console.log(data, "data");

    if (initialValues) {
      edit(
        {
          ...data,
          id: initialValues?._id,
        },
        {
          onSuccess: (res) => {
            toast.success("Animation updated");
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
            toast.success("Animation added");
            router.replace("/admin/animation");
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

export default AnimationForm;
