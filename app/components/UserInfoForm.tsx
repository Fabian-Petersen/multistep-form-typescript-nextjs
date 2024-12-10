"use client";
// $ Form Component for the User Information

import React from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";
import { useMultiFormContext } from "../context_api/useMultiFormContext";

// $ Form Types
type UserForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  DOB: string;
};

type UserInfoFormProps = UserForm & {
  updateFields: (fields: Partial<UserForm>) => void;
};

const UserInfoForm: React.FC<Partial<UserInfoFormProps>> = ({
  updateFields,
}) => {
  const { data } = useMultiFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateFields) {
      updateFields({ [e.target.name]: e.target.value });
    }
  };

  return (
    <FormRowsWrapper>
      <FormRowInput
        type="text"
        name="firstName"
        labelText="First Name"
        placeholderText="Enter Name"
        value={data.firstName || ""}
        onChange={handleChange}
      />
      <FormRowInput
        type="text"
        name="lastName"
        labelText="Last Name"
        placeholderText="Enter Last Name"
        value={data.lastName || ""}
        onChange={handleChange}
      />
      <FormRowInput
        type="email"
        name="email"
        labelText="Email"
        placeholderText="Enter email"
        value={data.email || ""}
        onChange={handleChange}
      />
      <FormRowInput
        type="text"
        name="phone"
        labelText="Phone Number"
        placeholderText="Enter phone number"
        value={data.phone || ""}
        onChange={handleChange}
      />
      <FormRowInput
        type="date"
        name="DOB"
        className="placeholder:text-gray-800"
        labelText="Date of Birth"
        placeholderText="Enter Date of Birth"
        value={data.DOB || ""}
        onChange={handleChange}
      />
    </FormRowsWrapper>
  );
};

export default UserInfoForm;

{
  /* <FormRowSelect
  name="gender"
  labelText="Gender"
  options={["Male", "Female"]}
  // placeholderText="Enter name"
  value={gender}
  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
    if (updateFields) {
      updateFields({ [e.target.name]: e.target.value });
    }
  }}
  // required
/> */
}
