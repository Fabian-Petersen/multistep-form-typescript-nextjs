"use client";
// $ Form Component for the User Information

import React, { useEffect } from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";

<<<<<<< HEAD
type UserInfoProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  DOB: string;
};

type UserFormProps = UserInfoProps & {
  updateFields: (fields: Partial<UserInfoProps>) => void;
};

const UserInfoForm: React.FC<Partial<UserFormProps>> = ({ updateFields }) => {
  const { data } = useMultiFormContext();

  // Add debugging
  useEffect(() => {
    console.log("UserInfoForm rendered with data:", data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changing to:`, value); // Debug change event

    if (updateFields) {
      updateFields({ [name]: value });
    }
  };
=======
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
>>>>>>> react-hook-form

  // Debug values before render
  console.log("Rendering form with firstName:", data.firstName);

  return (
    <FormRowsWrapper>
      <FormRowInput
        type="text"
        {...register("firstName")}
        labelText="First Name"
        placeholderText="Enter Name"
<<<<<<< HEAD
        value={data.firstName}
        onChange={handleChange}
=======
        error={
          errors.firstName
            ? { type: "manual", message: errors.firstName.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("lastName")}
        labelText="Last Name"
        placeholderText="Enter Last Name"
<<<<<<< HEAD
        value={data.lastName}
        onChange={handleChange}
=======
        error={
          errors.lastName
            ? { type: "manual", message: errors.lastName.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />

      <FormRowInput
        type="email"
        {...register("email")}
        labelText="Email"
        placeholderText="Enter email"
<<<<<<< HEAD
        value={data.email}
        onChange={handleChange}
=======
        error={
          errors.email
            ? { type: "manual", message: errors.email.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("phone")}
        labelText="Phone Number"
        placeholderText="Enter phone number"
<<<<<<< HEAD
        value={data.phone}
        onChange={handleChange}
=======
        error={
          errors.phone
            ? { type: "manual", message: errors.phone.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="date"
        {...register("DOB")}
        className="placeholder:text-gray-800"
        labelText="Date of Birth"
        placeholderText="Enter Date of Birth"
<<<<<<< HEAD
        value={data.DOB}
        onChange={handleChange}
=======
        error={
          errors.DOB
            ? { type: "manual", message: errors.DOB.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
    </FormRowsWrapper>
  );
};

export default UserInfoForm;
