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
import { useCreateShowcase, useEditShowcase } from "@/api/showcase";
import { useDelete, useUpload } from "@/api/image";
import { Showcase } from "@/types/showcase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { transformFile } from "@/utils/transformFile";
import Loader from "@/UI/Loader";
import ImagePreview from "@/UI/ImagePreview";

const ShowcaseSchema = z.object({
  name: z.string().min(1, "Please enter a showcase name"),
  link: z.string().min(3, "Please enter a 360 video link for showcase"),
  image: z.string().min(3, "Please upload a showcase photo"),
});

type ShowcaseSchemaType = z.infer<typeof ShowcaseSchema>;

const ShowcaseForm: React.FC<{ initialValues?: Showcase }> = ({
  initialValues,
}) => {
  const { mutate: create, isPending: createLoader } = useCreateShowcase();
  const { mutate: edit, isPending: editLoader } = useEditShowcase();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = createLoader || editLoader;
  const buttonText = initialValues ? "Edit Showcase" : "Add Showcase";

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<ShowcaseSchemaType>({
    resolver: zodResolver(ShowcaseSchema),
    defaultValues: { ...initialValues },
  });

  const onSubmit: SubmitHandler<ShowcaseSchemaType> = (data) => {
    if (initialValues) {
      edit(
        {
          ...data,
          id: initialValues?._id,
          ...(data?.image?.length ? { image: data?.image } : { image: null }),
        },
        {
          onSuccess: (res) => {
            toast.success("Showcase updated.");
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
            toast.success("New showcase added.");
            router.replace("/admin/showcase");
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
        preset: "Showcase",
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
      folder: "showcase",
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

export default ShowcaseForm;
