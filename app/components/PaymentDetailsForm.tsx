"use client";

import React from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";
import { useMultiFormContext } from "../context_api/useMultiFormContext";
// import formData from "@/public/data/formData";

type PaymentForm = {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
};

type PaymentFormProps = PaymentForm & {
  updateFields: (fields: Partial<PaymentForm>) => void;
};

const PaymentDetailsForm: React.FC<Partial<PaymentFormProps>> = ({
  updateFields,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateFields) {
      updateFields({ [e.target.name]: e.target.value });
    }
  };

  const { data } = useMultiFormContext();
  return (
    <FormRowsWrapper>
      <FormRowInput
        type="text"
        name="cardNumber"
        labelText="cardNumber"
        className=""
        placeholderText="Enter Card Number"
        onChange={handleChange}
        value={data.cardNumber}
      />
      <FormRowInput
        type="text"
        name="cardHolder"
        labelText="Name on Card"
        placeholderText="Card Holder's Name"
        onChange={handleChange}
        value={data.cardHolder}
      />
      <FormRowInput
        type="date"
        name="expiryDate"
        labelText="Expiry Date"
        placeholderText="Expiry Date"
        onChange={handleChange}
        value={data.expiryDate}
      />
      <FormRowInput
        type="text"
        name="cvv"
        labelText="CVV"
        placeholderText="cvv"
        onChange={handleChange}
        value={data.cvv}
      />
    </FormRowsWrapper>
  );
};

export default PaymentDetailsForm;
