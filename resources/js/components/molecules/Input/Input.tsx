import { cva } from "class-variance-authority";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { cn } from "../../../lib/utils";
import * as React from "react";

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  register: UseFormRegisterReturn<any>;
  error?: FieldError;
  label: string;
  name: string;
}

interface ITextarea extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> {
  register: UseFormRegisterReturn<any>;
  error?: FieldError;
  label: string;
  name: string;
}

const inputVariants = cva("", {
  variants: {
    status: {
      default: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      error: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export function Input({ register, error, name, label, type, ...props }: IInput) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        {...register}
        className={cn(inputVariants({ status: error ? "error" : "default" }))}
        id={name}
        type={type}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs italic">{error.message}</p>
      )}
    </div>
  );
}

export function TextArea({ register, error, name, label, ...props }: ITextarea) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...register}
        className={cn(inputVariants({ status: error ? "error" : "default" }))}
        id={name}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs italic">{error.message}</p>
      )}
    </div>
  );
}