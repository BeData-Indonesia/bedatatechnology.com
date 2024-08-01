import { SelectHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { cn } from "../../../lib/utils";

interface ISelect extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "name"> {
  register: UseFormRegisterReturn;
  error?: FieldError;
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  multiple?: boolean; 
}

const selectVariants = cva("", {
  variants: {
    status: {
      default:
        "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      error:
        "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export const Select: React.FC<ISelect> = ({
  register,
  error,
  name,
  label,
  options,
  multiple = false,
  ...props
}) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        {...register}
        className={cn(selectVariants({ status: error ? "error" : "default" }))}
        id={name}
        multiple={multiple} 
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </div>
  );
};
