"use client";
// $ Form Component for the User Information

import React, { useEffect } from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/public/schema/formSchema";

const UserInfoForm: React.FC = () => {
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
        {...register("firstName")}
        labelText="First Name"
        placeholderText="Enter Name"
        error={
          errors.firstName
            ? { type: "manual", message: errors.firstName.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("lastName")}
        labelText="Last Name"
        placeholderText="Enter Last Name"
        error={
          errors.lastName
            ? { type: "manual", message: errors.lastName.message || "" }
            : undefined
        }
      />

      <FormRowInput
        type="email"
        {...register("email")}
        labelText="Email"
        placeholderText="Enter email"
        error={
          errors.email
            ? { type: "manual", message: errors.email.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("phone")}
        labelText="Phone Number"
        placeholderText="Enter phone number"
        error={
          errors.phone
            ? { type: "manual", message: errors.phone.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="date"
        {...register("DOB")}
        className="placeholder:text-gray-800"
        labelText="Date of Birth"
        placeholderText="Enter Date of Birth"
        error={
          errors.DOB
            ? { type: "manual", message: errors.DOB.message || "" }
            : undefined
        }
      />
    </FormRowsWrapper>
  );
};

export default UserInfoForm;
