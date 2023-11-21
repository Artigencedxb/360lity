import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDeleteVideography } from "../../api/Videography";
import { PriorityIcon } from "../../assets";
import Triangle from "../../common/Triangle";
import { Photography } from "../../types/photography";
import { Team } from "../../types/team";
import DeleteModal from "../Modal/DeleteModal";
import PriorityModal from "../Modal/priorityModal";
import { Videography } from "../../types/videography";

const VideographyAdminCard: React.FC<{ data: Videography }> = ({ data }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);

  //delete api
  const { mutate, isPending } = useDeleteVideography();

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

        {
          <div
            className={cn(
              "absolute bg-black/50 flex-col w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10",
              {}
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
