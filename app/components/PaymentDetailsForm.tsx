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

<<<<<<< HEAD
const PaymentDetailsForm: React.FC<Partial<PaymentFormProps>> = ({
  updateFields,
}) => {
  const { data } = useMultiFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateFields) {
      console.log(
        `Updating field ${e.target.name} with value ${e.target.value}`
      );
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
        {...register("cardNumber")}
        labelText="cardNumber"
        className=""
        placeholderText="Enter Card Number"
<<<<<<< HEAD
        onChange={handleChange}
        value={data.cardNumber ?? ""}
=======
        error={
          errors.cardNumber
            ? { type: "manual", message: errors.cardNumber.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("cardHolder")}
        labelText="Name on Card"
        placeholderText="Card Holder's Name"
<<<<<<< HEAD
        onChange={handleChange}
        value={data.cardHolder ?? ""}
=======
        error={
          errors.cardHolder
            ? { type: "manual", message: errors.cardHolder.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="date"
        {...register("expiryDate")}
        labelText="Expiry Date"
        placeholderText="Expiry Date"
<<<<<<< HEAD
        onChange={handleChange}
        value={data.expiryDate ?? ""}
=======
        error={
          errors.expiryDate
            ? { type: "manual", message: errors.expiryDate.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
      <FormRowInput
        type="text"
        {...register("cvv")}
        labelText="CVV"
        placeholderText="cvv"
<<<<<<< HEAD
        onChange={handleChange}
        value={data.cvv ?? ""}
=======
        error={
          errors.cvv
            ? { type: "manual", message: errors.cvv.message || "" }
            : undefined
        }
>>>>>>> react-hook-form
      />
    </FormRowsWrapper>
  );
};

export default PaymentDetailsForm;
