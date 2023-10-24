import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>; // declare register props
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ id, label, register, name, type = "text", error, ...rest }) => {
    return (
      <div className="space-y-2">
        <input
          {...rest}
          {...register(name)}
          name={name}
          placeholder={label || ""}
          type={type}
          id={id}
          className={cn("outline-none py-2 px-5 border-2 rounded-[15px]", {
            "border-0 ring-2 ring-red-300": error?.length,
          })}
        />
        {error?.length && (
          <p className="text-red-700 text-sm font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
