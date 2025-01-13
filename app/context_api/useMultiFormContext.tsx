"use client";
import { useRef, useEffect } from "react";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type FormInputProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  DOB: string;
  street: string;
  province: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
};

export const initialFormData: FormInputProps = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  DOB: "",
  // gender: "",
  street: "",
  province: "",
  city: "",
  postalCode: "",
  cardNumber: "",
  cardHolder: "",
  expiryDate: "",
  cvv: "",
};

export type MultiFormContextProps = {
  validationErrors: { [key: string]: string };
  setValidationErrors: Dispatch<SetStateAction<{ [key: string]: string }>>;
  validationStatus: boolean;
  setValidationStatus: Dispatch<SetStateAction<boolean>>;
  data: FormInputProps;
  setData: Dispatch<SetStateAction<FormInputProps>>;
  updateFields: <T extends Partial<FormInputProps>>(fields: T) => void;
};

const MultiFormContext = createContext<MultiFormContextProps | null>(null);

export const MultiFormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [validationStatus, setValidationStatus] = useState(false);
  const [data, setData] = useState<FormInputProps>(initialFormData);

  // $ Debounce Setup for form data updates
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const updateFields = <T extends Partial<FormInputProps>>(fields: T) => {
    // $ Immediate update for UI responsiveness
    setData((prev) => {
      const newData = { ...prev, ...fields };
      console.log("New data state:", newData); // Debug new state
      return newData;
    });
  };

  const contextValues = {
    validationErrors,
    setValidationErrors,
    validationStatus,
    setValidationStatus,
    data,
    setData,
    updateFields,
  };

  // Debug render value
  console.log("Provider rendering with data:", data);

  // $ Clear the previous timeout
  if (debounceRef.current) {
    clearTimeout(debounceRef.current);
  }

  debounceRef.current = setTimeout(() => {
    console.log("Debounced update:", data);
  }, 500);

  // Debug logging
  useEffect(() => {
    console.log("Form data updated:", data);
  }, [data]);

  return (
    <MultiFormContext.Provider value={contextValues}>
      {children}
    </MultiFormContext.Provider>
  );
};

// $ Custom hook to consume the context
export const useMultiFormContext = () => {
  const context = useContext(MultiFormContext);
  if (!context) {
    throw new Error(
      "useMultiFormContext must be used within a MultiFormProvider"
    );
  }
  return context;
};

export default MultiFormContext;
