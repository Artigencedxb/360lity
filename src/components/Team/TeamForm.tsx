"use client";
import React, { useEffect } from "react";
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
import { Team } from "../../types/team";
import { useCreateTeam, useEditTeam } from "../../api/team";

const TeamSchema = z.object({
  name: z.string().min(1, "Please enter a team name"),
  role: z.string().min(3, "Please enter a team role"),
  image: z.string().optional(),
  whatsapp: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  tiktok: z.string().optional(),
  priority: z.coerce.number().gte(1, "Please enter a priority").optional(),
  description: z
    .string()
    .min(100, "Please enter a minimum of 100 characters.")
    .max(250, "Maximum 250 characters is allowed."),
});

type TeamSchemaType = z.infer<typeof TeamSchema>;

const TeamForm: React.FC<{ initialValues?: Team }> = ({ initialValues }) => {
  const { mutate: create, isPending: createLoader } = useCreateTeam();
  const { mutate: edit, isPending: editLoader } = useEditTeam();
  const { mutate: upload, isPending: uploadLoader } = useUpload();
  const { mutate: deleteImage, isPending: deleteLoader } = useDelete();
  const imageloader = uploadLoader || deleteLoader;
  const loader = createLoader || editLoader;
  const buttonText = initialValues ? "Update" : "Add Team";

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<TeamSchemaType>({
    resolver: zodResolver(TeamSchema),
    defaultValues: { ...initialValues },
  });

  useEffect(() => {
    if (initialValues) {
      reset({ ...initialValues });
    }
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<TeamSchemaType> = (data) => {
    if (initialValues) {
      edit(
        {
          ...data,
          id: initialValues?._id,
          ...(data?.image?.length ? { image: data?.image } : { image: null }),
        },
        {
          onSuccess: (res) => {
            toast.success("Team updated.");
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
            toast.success("New team added.");
            router.replace("/admin/team");
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
        preset: "Team",
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
      folder: "team",
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
            alt="team profile"
            deleteHandler={deleteHandler}
            className="!w-[360px] !h-[360px]"
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
              (360px x 360px)
            </div>
          </div>
        )}
        <Input
          id={"name"}
          name="name"
          register={register}
          label="Name"
          error={errors?.name?.message}
          className="w-full"
          maxLength={17}
        />

        <Input
          id={"role"}
          name="role"
          register={register}
          label="Role"
          error={errors?.role?.message}
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
        <Input
          id={"whatsapp"}
          name="whatsapp"
          type="tel"
          register={register}
          label="Whatsapp"
          error={errors?.whatsapp?.message}
          className="w-full"
        />
        <Input
          id={"linkedin"}
          name="linkedin"
          type="tel"
          register={register}
          label="Linkedin"
          error={errors?.linkedin?.message}
          className="w-full"
        />
        <Input
          id={"instagram"}
          name="instagram"
          type="tel"
          register={register}
          label="Instagram"
          error={errors?.instagram?.message}
          className="w-full"
        />
        <Input
          id={"tiktok"}
          name="tiktok"
          type="tel"
          register={register}
          label="Tiktok"
          error={errors?.tiktok?.message}
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

export default TeamForm;
