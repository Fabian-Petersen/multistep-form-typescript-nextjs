// $ This variable holds all the form data fields that are used in the multi-step form.

export type FormInputProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  DOB: string;
  gender: string;
  street: string;
  province: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
};

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  DOB: "",
  gender: "",
  street: "",
  province: "",
  city: "",
  postalCode: "",
  cardNumber: "",
  cardHolder: "",
  expiryDate: "",
  cvv: "",
};

export default defaultValues;
