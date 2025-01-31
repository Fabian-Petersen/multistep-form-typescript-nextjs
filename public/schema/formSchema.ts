// $ The schema to validate the forms is not used yet.

import { z } from "zod";

// $ Set up the schema to validate the forms
const formSchema = z.object({
  // User Info
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  DOB: z.string().min(1, "Date of birth is required").optional(),

  // Address
  street: z.string().min(1, "Street address is required").optional(),
  province: z.string().min(1, "Province is required").optional(),
  city: z.string().min(1, "City is required").optional(),
  postalCode: z.string().min(1, "Postal code is required").optional(),

  // Payment
  cardNumber: z.string().min(16, "Card number must be 16 digits").optional(),
  cardHolder: z.string().min(1, "Card holder name is required").optional(),
  expiryDate: z.string().min(1, "Expiry date is required").optional(),
  cvv: z.string().min(3, "CVV must be 3 digits").optional(),
});

export type FormData = z.infer<typeof formSchema>;

export default formSchema;
