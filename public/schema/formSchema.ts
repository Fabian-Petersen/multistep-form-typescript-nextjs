// $ The schema to validate the forms is not used yet.

import { z } from "zod";

// $ Set up the schema to validate the forms
const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  address: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(3),
  zip: z.string().min(3),
  cardName: z.string().min(3),
  cardNumber: z.string().min(3),
  expiryDate: z.string().min(3),
  cvv: z.string().min(3),
});

export default formSchema;
