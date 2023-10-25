import cn from "classnames";
import React, { TextareaHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  name: string;
  error?: string;
  className?: string;
  register: UseFormRegister<any>; // declare register props
}

const TextArea: React.FC<TextareaProps> = React.forwardRef(
  ({ id, label, register, name, error, className, ...rest }) => {
    return (
      <div className="space-y-2">
        <textarea
          {...rest}
          {...register(name)}
          name={name}
          placeholder={label || ""}
          id={id}
          className={cn(
            "outline-none py-2 px-5 border-2 rounded-x",
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

TextArea.displayName = "TextArea";

export default TextArea;
