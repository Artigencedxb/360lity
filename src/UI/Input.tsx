import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  error?: string;
  className?: string;
  register: UseFormRegister<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void// declare register props
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ id, label, register, name, type = "text", error, className,onChange, ...rest }) => {
    return (
      <div className="space-y-2">
        <input
          {...rest}
          {...register(name, {
            onChange: onChange
          })}
          name={name}
          placeholder={label || ""}
          type={type}
          id={id}
          className={cn(
            "outline-none py-2 px-5 border-2 rounded-[10px]",
            className,
            {
              "border-0 ring-2 ring-red-300": error?.length,
            }
          )}
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
