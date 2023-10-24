import cn from "classnames";
import React from "react";

const Button: React.FC<{ text?: string; className?: string }> = ({
  text = "submit",
  className,
}) => {
  return (
    <button
      className={cn(
        "rounded-[15px] px-6 capitalize bg-[#0060E4] font-medium py-3 text-white",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
