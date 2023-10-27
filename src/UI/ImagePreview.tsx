import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const ImagePreview: React.FC<{
  src: string;
  alt: string;
  deleteHandler?: () => void;
}> = ({ src, alt, deleteHandler }) => {
  return (
    <div className="relative w-[250px] h-[9rem] rounded-x">
      <Image src={src} alt={alt} fill className="rounded-x" />
      <button
        type="button"
        onClick={deleteHandler}
        className="absolute z-20 top-2 right-2 hover:bg-red-400 transition-all duration-200 bg-red-500 w-10 h-10 rounded-md flex items-center justify-center"
      >
        <TrashIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default ImagePreview;
