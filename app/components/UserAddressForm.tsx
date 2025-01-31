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

  // Log values when component mounts
  useEffect(() => {
    console.log("Current values:", getValues());
  }, [getValues]);

  return (
    <FormRowsWrapper>
      <FormRowInput
        type="text"
        {...register("street")}
        labelText="Address"
        className=""
        placeholderText="Enter Name"
        error={
          errors.street
            ? { type: "manual", message: errors.street.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("province")}
        labelText="Province"
        placeholderText="Province"
        error={
          errors.province
            ? { type: "manual", message: errors.province.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("city")}
        labelText="City"
        placeholderText="City"
        error={
          errors.city
            ? { type: "manual", message: errors.city.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("postalCode")}
        labelText="Postal Code"
        placeholderText="Enter name"
        error={
          errors.postalCode
            ? { type: "manual", message: errors.postalCode.message || "" }
            : undefined
        }
      />
    </FormRowsWrapper>
  );
};

export default UserAddressForm;
