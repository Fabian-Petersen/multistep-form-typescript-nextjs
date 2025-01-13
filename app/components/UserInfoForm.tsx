"use client";
// $ Form Component for the User Information

import React, { useEffect } from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";
import { useMultiFormContext } from "../context_api/useMultiFormContext";

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

  // Debug values before render
  console.log("Rendering form with firstName:", data.firstName);

  return (
    <FormRowsWrapper>
      <FormRowInput
        type="text"
        name="firstName"
        labelText="First Name"
        placeholderText="Enter Name"
        value={data.firstName}
        onChange={handleChange}
      />
      <FormRowInput
        type="text"
        name="lastName"
        labelText="Last Name"
        placeholderText="Enter Last Name"
        value={data.lastName}
        onChange={handleChange}
      />
      <FormRowInput
        type="email"
        name="email"
        labelText="Email"
        placeholderText="Enter email"
        value={data.email}
        onChange={handleChange}
      />
      <FormRowInput
        type="text"
        name="phone"
        labelText="Phone Number"
        placeholderText="Enter phone number"
        value={data.phone}
        onChange={handleChange}
      />
      <FormRowInput
        type="date"
        name="DOB"
        className="placeholder:text-gray-800"
        labelText="Date of Birth"
        placeholderText="Enter Date of Birth"
        value={data.DOB}
        onChange={handleChange}
      />
    </FormRowsWrapper>
  );
};

export default UserInfoForm;
