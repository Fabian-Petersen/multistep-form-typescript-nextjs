"use client";

import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type FormRowInputProps = {
  type: string;
  name: string;
  labelText: string;
  placeholderText?: string;
  className?: string;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormRowInput = forwardRef<HTMLInputElement, FormRowInputProps>(
  (
    {
      type,
      name,
      labelText,
      placeholderText,
      className = "",
      error,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full mb-2 group">
        <input
          ref={ref}
          type={type}
          name={name}
          className={`${className} text-sm py-3 px-2 peer
            outline-none border-none focus:border-b-rose-600 text-gray-800 rounded-sm
            w-full placeholder-transparent`}
          placeholder={placeholderText}
          onChange={onChange}
          {...props}
        />
        {labelText && (
          <label
            htmlFor={name}
            className="absolute text-sm -top-5 left-0 transition-all duration-400 text-gray-400
              peer-placeholder-shown:top-3 px-2 mb-0 peer-placeholder-shown:text-gray-600
              peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm tracking-wider
              dark:peer-focus:text-gray-400 dark:peer-placeholder-shown:text-fontLight"
          >
            {labelText}
          </label>
        )}
        {error && (
          <span className="text-xs text-red-600 mt-1">{error.message}</span>
        )}
      </div>
    );
  }
);

FormRowInput.displayName = "FormRowInput";

export default FormRowInput;
