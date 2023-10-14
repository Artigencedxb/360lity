import classNames from "classnames";
import React from "react";

const Triangle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={classNames(
        "triangle absolute bottom-[3.2px] bg-[#D5E5F7] left-[48%] z-20",
        className
      )}
    />
  );
};

export default Triangle;
