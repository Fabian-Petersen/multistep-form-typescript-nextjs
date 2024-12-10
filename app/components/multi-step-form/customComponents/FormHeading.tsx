import * as React from "react";

type FormHeadingProps = {
  title: string;
};

const FormHeading = ({ title }: FormHeadingProps) => {
  return (
    <h1
      className={`tracking-wider text-3xl py-4 font-semibold dark:text-white text-blue-600 w-full font-sans`}
    >
      <span>{title}</span>
    </h1>
  );
};

export default FormHeading;
