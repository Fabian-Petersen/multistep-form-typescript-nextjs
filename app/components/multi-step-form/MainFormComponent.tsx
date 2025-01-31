"use client";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserInfoForm from "../UserInfoForm";
import UserAddressForm from "../UserAddressForm";
import PaymentDetailsForm from "../PaymentDetailsForm";
import FormControlButtons from "./customComponents/FormControlButtons";
import FormHeading from "./customComponents/FormHeading";
import FormStageLocation from "./customComponents/FormStageLocation";
<<<<<<< HEAD
import {
  initialFormData,
  useMultiFormContext,
} from "@/app/context_api/useMultiFormContext";

const MainFormComponent: React.FC = () => {
  const { data, updateFields, setData } = useMultiFormContext();

  // $ Create an array of the form steps
  const steps = [
    <UserInfoForm key="UserInfoForm" updateFields={updateFields} />,
    <UserAddressForm key="UserAddressForm" updateFields={updateFields} />,
    <PaymentDetailsForm key="PaymentDetailsForm" updateFields={updateFields} />,
=======
import useMultiFormHook from "../customHooks/useMultiFormHook";
import formSchema, { FormData } from "@/public/schema/formSchema";
import defaultValues from "@/public/data/formData";
import { useRouter } from "next/navigation";

type FieldNames = keyof FormData;

const MainFormComponent: React.FC = () => {
  // $ Store form data in state to persist between steps
  const [formData, setFormData] = useState<Partial<FormData>>(defaultValues);

  // $ Get the router object to direct the user to the success page
  const router = useRouter();

  // $ Create a form provider with the form resolver and default values
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: formData,
  });

  // $ Watch for form changes and update stored data
  const { watch } = methods;
  useEffect(() => {
    const subscription = watch((value) => {
      setFormData((currentData) => ({
        ...currentData,
        ...value,
      }));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // $ Create an array of the form steps
  const steps = [
    <UserInfoForm key="UserInfoForm" />,
    <UserAddressForm key="UserAddressForm" />,
    <PaymentDetailsForm key="PaymentDetailsForm" />,
>>>>>>> react-hook-form
  ];

  // $ Destructure the returned values from the custom hook
  const { step, Next, Back, currentStepIndex, isLastStep } =
    useMultiFormHook(steps);

<<<<<<< HEAD
  // $ Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) {
      Next();
    } else {
      console.log("Final Form Data:", data);
      setData(initialFormData);
      alert("Form Submitted");
=======
  const getFieldsForStep = (step: number): FieldNames[] => {
    switch (step) {
      case 0:
        return ["firstName", "lastName", "email", "phone", "DOB"];
      case 1:
        return ["street", "province", "city", "postalCode"];
      case 2:
        return ["cardNumber", "cardHolder", "expiryDate", "cvv"];
      default:
        return [];
    }
  };

  // $ Handle form submission (Can send data to database)
  const onSubmit = async (data: FormData) => {
    console.log("onSubmit: data", data);
    if (isLastStep) {
      console.log("Final form data:", data);
    }
  };

  // $ Handle next button click
  const handleNext = async () => {
    const fields = getFieldsForStep(currentStepIndex);
    const isValid = await methods.trigger(fields);
    console.log("handleNext: isValid", isValid);

    // $ Check if the form is valid and move to the next step
    if (isValid) {
      console.log("formData:", formData);
      Next();

      // $check if on last form and if form is valid to confirm submission
      if (isLastStep && methods.formState.isValid) {
        // $ Inform user of successful page submission
        router.push("/success");
        // $ Redirect to the home page after 3 seconds
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
>>>>>>> react-hook-form
    }
  };

  return (
<<<<<<< HEAD
    <form
      className="relative grid items-center p-6 justify-items-center gap-4 w-[60%] max-w-4xl h-auto bg-slate-800/90 rounded-[0.5rem] border border-gray-700/50"
      onSubmit={handleSubmit}
    >
      <FormStageLocation currentStepIndex={currentStepIndex} steps={steps} />
      <FormHeading
        title={step.key?.replace("Form", " ") + " " || "Personal Information"}
        //Add a space to the step.key string and capitalize the first letter
      />
      {step}
      <FormControlButtons
        Next={Next}
        Back={Back}
        steps={steps}
        currentStepIndex={currentStepIndex}
      />
    </form>
=======
    <FormProvider {...methods}>
      <form
        className="relative grid items-center p-6 justify-items-center gap-4 w-[60%] max-w-6xl h-auto bg-slate-800/90 rounded-[0.5rem] border border-gray-700/50"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormStageLocation currentStepIndex={currentStepIndex} steps={steps} />
        <FormHeading
          title={
            step.key?.replace(/([a-z])([A-Z])/g, "$1 $2").replace("Form", "") +
              " " || "Personal Information"
          }
        />
        {step}
        <FormControlButtons
          Next={handleNext}
          Back={Back}
          steps={steps}
          currentStepIndex={currentStepIndex}
          isLastStep={isLastStep}
        />
      </form>
    </FormProvider>
>>>>>>> react-hook-form
  );
};

export default MainFormComponent;
