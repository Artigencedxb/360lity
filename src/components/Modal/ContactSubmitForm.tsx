import Loader from "@/UI/Loader";
import { Modal } from "@/UI/Modal";
import cn from "classnames";
import React from "react";

const ContactSubmitModal: React.FC<{
  open: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClick: () => void;

  loading: boolean;
}> = ({ open, onClose, onClick, loading }) => {
  return (
    <Modal open={open} onClose={onClose as any} title={`Submit Form`}>
      <p className="text-gray-400 font-medium first-letter:uppercase">
        Are you sure you want to submit your contact details?
      </p>
      <div className="inline-flex items-center gap-6 justify-end w-full mt-6">
        <button
          className="text-sm font-medium"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onClose(e)
          }
        >
          No
        </button>
        <button
        onClick={onClick}
          disabled={loading}
          type="submit"
          className={cn(
            "bg-[#0060E4] disabled:opacity-80 hover:bg-[#0060E4]/90 transition-all duration-200 px-4 py-2.5 text-sm rounded-x text-white font-medium",
            {
              "flex items-center justify-center gap-3": loading,
            }
          )}
        >
          {loading ? (
            <Loader className="w-[18px] h-[18px] !border-[4px] !border-t-white !border-gray-300" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </Modal>
  );
};

export default ContactSubmitModal;
