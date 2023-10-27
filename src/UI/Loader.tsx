import cn from "classnames";
import React from "react";

const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "border-secondary h-9 w-9 animate-spin rounded-full border-[5px] border-t-[#0060E4]",
        className
      )}
    />
  );
};

export default Loader;
