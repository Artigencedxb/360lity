import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDeleteVideography } from "../../api/Videography";
import { PriorityIcon } from "../../assets";
import Triangle from "../../common/Triangle";
import { Videography } from "../../types/videography";
import { get_youtube_thumbnail } from "../../utils/getYoutubeThumbnail";
import DeleteModal from "../Modal/DeleteModal";
import PriorityModal from "../Modal/priorityModal";

const VideographyAdminCard: React.FC<{ data: Videography }> = ({ data }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);

  //delete api
  const { mutate, isPending } = useDeleteVideography();

  const video_thumbnail = get_youtube_thumbnail(data?.link, "high");

  const showcaseDeleteHandler = () => {
    mutate(
      { id: data!.id ?? data!._id },
      {
        onSuccess: () => {
          setDeleteModal(false);
        },
      }
    );
  };
  const router = useRouter();
  return (
    <>
      {deleteModal && (
        <DeleteModal
          onClick={showcaseDeleteHandler}
          loading={isPending}
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          label="videography"
        />
      )}
      {priorityModal && (
        <PriorityModal
          initialValues={data as Videography}
          onClose={() => setPriorityModal(false)}
          open={priorityModal}
          type="videography"
        />
      )}
      <div
        className={cn(
          " rounded-x bg-[#d9d9d9] transition-all relative min-h-[13rem] group overflow-hidden inline-block"
        )}
      >
        <Triangle />
        {video_thumbnail?.length ? (
          <div className="block transition-all duration-300 group-hover:bg-black/30">
            <Image
              src={video_thumbnail}
              fill
              className="rounded-x object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
              alt="Videography"
            />
          </div>
        ) : (
          ""
        )}
        {
          <div
            className={cn(
              "absolute bg-black/50 flex-col w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10"
            )}
          >
            <div className="space-x-4">
              <button
                type="button"
                onClick={() =>
                  router.push(`/admin/videography/${data?._id as string}`)
                }
              >
                <PencilSquareIcon className="w-8 h-8 text-white" />
              </button>
              <button onClick={() => setPriorityModal(true)}>
                <Image
                  width={35}
                  height={35}
                  src={PriorityIcon}
                  alt="priority"
                />
              </button>
              <button onClick={() => setDeleteModal(true)}>
                <TrashIcon className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default VideographyAdminCard;
