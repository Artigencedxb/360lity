import Loader from "@/UI/Loader";
import { Modal } from "@/UI/Modal";
import cn from "classnames";
import React from "react";

const DeleteModal: React.FC<{
  open: boolean;
  onClose: () => void;
  label: string;
  onClick: () => void;
  loading: boolean;
}> = ({ open, onClose, label, onClick, loading }) => {
  return (
    <Modal open={open} onClose={onClose} title={`Delete ${label}?`}>
      <p className="text-gray-400 font-medium first-letter:uppercase">
        Are you sure you want to delete this {label}
      </p>
      <div className="inline-flex items-center gap-6 justify-end w-full mt-6">
        <button className="text-sm font-medium" onClick={onClose}>
          No
        </button>
        <button
          onClick={onClick}
          disabled={loading}
          className={cn(
            "bg-red-500 disabled:opacity-80 hover:bg-red-400 transition-all duration-200 px-4 py-2.5 text-sm rounded-x text-white font-medium",
            {
              "flex items-center justify-center gap-3": loading,
            }
          )}
        >
          {loading ? (
            <Loader className="w-[18px] h-[18px] !border-[4px] !border-t-white !border-gray-300" />
          ) : (
            "Yes"
          )}
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
