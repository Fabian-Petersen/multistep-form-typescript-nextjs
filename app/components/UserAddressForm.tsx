"use client";

import React from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";
import { useMultiFormContext } from "../context_api/useMultiFormContext";

type AddressForm = {
  city: string;
  street: string;
  postalCode: string;
  province: string;
};

type AddressFormProps = AddressForm & {
  updateFields: (fields: Partial<AddressFormProps>) => void;
};

const UserAddressForm: React.FC<Partial<AddressFormProps>> = ({
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
        name="street"
        labelText="Address"
        className=""
        placeholderText="Enter Name"
        value={data.street}
        onChange={handleChange}
        // required
      />
      <FormRowInput
        type="text"
        name="province"
        labelText="Province"
        placeholderText="Province"
        value={data.province}
        onChange={handleChange}
        // required
      />
      <FormRowInput
        type="text"
        name="city"
        labelText="City"
        placeholderText="City"
        value={data.city}
        onChange={handleChange}
        // required
      />
      <FormRowInput
        type="text"
        name="postalCode"
        labelText="Postal Code"
        placeholderText="Enter name"
        value={data.postalCode}
        onChange={handleChange}
        // required
      />
    </FormRowsWrapper>
  );
};

export default UserAddressForm;
