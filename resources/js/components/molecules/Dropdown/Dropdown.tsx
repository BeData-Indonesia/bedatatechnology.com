import { cva } from "class-variance-authority";
import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { cn } from "../../../lib/utils";

interface IDropdown
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "name"> {
  register: UseFormRegisterReturn;
  error?: FieldError;
  label: string;
  name: string;
  children: React.ReactNode;
}

const dropdownVariants = cva("", {
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

export const Dropdown: React.FC<IDropdown> = ({
  register,
  error,
  name,
  label,
  children,
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
        className={cn(dropdownVariants({ status: error ? "error" : "default" }))}
        id={name}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </div>
  );
};
