"use client";

import React, { useEffect } from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/public/schema/formSchema";

const UserAddressForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext<FormData>();

<<<<<<< HEAD
const UserAddressForm: React.FC<Partial<AddressFormProps>> = () => {
  const { data, updateFields } = useMultiFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateFields) {
      updateFields({ [e.target.name]: e.target.value });
    }
  };
=======
  // Log values when component mounts
  useEffect(() => {
    console.log("Current values:", getValues());
  }, [getValues]);
>>>>>>> react-hook-form

  return (
    <FormRowsWrapper>
      <FormRowInput
        type="text"
        {...register("street")}
        labelText="Address"
        className=""
        placeholderText="Enter Name"
<<<<<<< HEAD
        value={data.street ?? ""}
        onChange={handleChange}
        // required
=======
        error={
          errors.street
            ? { type: "manual", message: errors.street.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("province")}
        labelText="Province"
        placeholderText="Province"
<<<<<<< HEAD
        value={data.province ?? ""}
        onChange={handleChange}
        // required
=======
        error={
          errors.province
            ? { type: "manual", message: errors.province.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("city")}
        labelText="City"
        placeholderText="City"
<<<<<<< HEAD
        value={data.city ?? ""}
        onChange={handleChange}
        // required
=======
        error={
          errors.city
            ? { type: "manual", message: errors.city.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("postalCode")}
        labelText="Postal Code"
        placeholderText="Enter name"
<<<<<<< HEAD
        value={data.postalCode ?? ""}
        onChange={handleChange}
        // required
=======
        error={
          errors.postalCode
            ? { type: "manual", message: errors.postalCode.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
    </FormRowsWrapper>
  );
};

export default UserAddressForm;
