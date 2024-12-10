"use client";

// $ Custom Component to render the form input fields by passing the relevant props.

type FormRowInputProps = {
  type: string;
  name: string;
  id: string;
  labelText: string;
  placeholderText: string;
  className: string;
  defaultValues?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  accept: string;
  value: string;
  error: { message: string };
};

const FormRowInput = ({
  id,
  type,
  name,
  labelText,
  placeholderText,
  className,
  defaultValues,
  onChange,
  required,
  accept,
  error,
}: Partial<FormRowInputProps>) => {
  return (
    <div className="relative w-full mb-2 group">
      <input
        id={id}
        type={type}
        name={name}
        className={`${className} text-sm py-3 px-2 peer
          outline-none border-none focus:border-b-rose-600 text-gray-800 rounded-sm
          w-full placeholder-transparent`}
        defaultValue={defaultValues}
        onChange={onChange}
        required={required}
        accept={accept}
        placeholder={placeholderText}
      ></input>
      {labelText && (
        <label
          htmlFor={id}
          className="absolute text-sm -top-5 left-0 transition-all duration-400 text-gray-400
            peer-placeholder-shown:top-3 px-2 mb-0 peer-placeholder-shown:text-gray-600
            peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm tracking-wider
            dark:peer-focus:text-gray-400 dark:peer-placeholder-shown:text-fontLight
            "
        >
          {labelText}
        </label>
      )}
      {/* Show error message if validation fails */}
      {error && (
        <span className="text-xs text-red-600 mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default FormRowInput;
