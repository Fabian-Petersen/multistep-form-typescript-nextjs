"use client";

import React, { useEffect } from "react";
import FormRowInput from "./multi-step-form/customComponents/FormRowInput";
import FormRowsWrapper from "./multi-step-form/customComponents/FormRowsWrapper";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/public/schema/formSchema";

const PaymentDetailsForm: React.FC = () => {
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
        {...register("cardNumber")}
        labelText="cardNumber"
        className=""
        placeholderText="Enter Card Number"
        error={
          errors.cardNumber
            ? { type: "manual", message: errors.cardNumber.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("cardHolder")}
        labelText="Name on Card"
        placeholderText="Card Holder's Name"
        error={
          errors.cardHolder
            ? { type: "manual", message: errors.cardHolder.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="date"
        {...register("expiryDate")}
        labelText="Expiry Date"
        placeholderText="Expiry Date"
        error={
          errors.expiryDate
            ? { type: "manual", message: errors.expiryDate.message || "" }
            : undefined
        }
      />
      <FormRowInput
        type="text"
        {...register("cvv")}
        labelText="CVV"
        placeholderText="cvv"
        error={
          errors.cvv
            ? { type: "manual", message: errors.cvv.message || "" }
            : undefined
        }
      />
    </FormRowsWrapper>
  );
};

export default PaymentDetailsForm;
