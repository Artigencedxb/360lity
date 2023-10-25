import cn from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
}

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ text = "submit", className, type = "button", ...rest }) => {
    return (
      <button
        {...rest}
        type={type}
        className={cn(
          "rounded-[10px] px-6 capitalize bg-[#0060E4] font-medium py-3 text-white",
          className
        )}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
