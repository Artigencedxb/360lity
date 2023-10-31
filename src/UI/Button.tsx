import cn from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import Loader from "./Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({
    text = "submit",
    className,
    type = "button",
    loading = false,
    ...rest
  }) => {
    return (
      <button
        {...rest}
        type={type}
        className={cn(
          "rounded-[10px] px-6 capitalize bg-[#0060E4] disabled:opacity-80 font-medium py-3 text-white",
          className,
          {
            "flex items-center justift-center gap-2": loading,
          }
        )}
      >
        {loading && <Loader className="!border-[2px] border-t-white w-4 h-4" />}
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
