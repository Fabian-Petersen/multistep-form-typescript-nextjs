import React from "react";
import UserInfoForm from "../UserInfoForm";
import UserAddressForm from "../UserAddressForm";
import PaymentDetailsForm from "../PaymentDetailsForm";
import FormControlButtons from "./customComponents/FormControlButtons";
import FormHeading from "./customComponents/FormHeading";
import useMultiFormHook from "../customHooks/useMultiFormHook";
import FormStageLocation from "./customComponents/FormStageLocation";
import { useMultiFormContext } from "@/app/context_api/useMultiFormContext";

const MainFormComponent: React.FC = () => {
  const { data, updateFields } = useMultiFormContext();

  // $ Create an array of the form steps
  const steps = [
    <UserInfoForm key="UserInfoForm" updateFields={updateFields} />,
    <UserAddressForm key="UserAddressForm" />,
    <PaymentDetailsForm key="PaymentDetailsForm" />,
  ];

  // $ Destructure the returned values from the custom hook
  const { step, Next, Back, currentStepIndex, isLastStep } =
    useMultiFormHook(steps);

  // $ Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) {
      Next();
    } else {
      console.log("Final form data:", data);
      alert("Form Submitted");
    }
  };

  return (
    <form
      className="relative grid items-center p-6 justify-items-center gap-4 w-[60%] max-w-6xl h-auto bg-slate-800/90 rounded-[0.5rem] border border-gray-700/50"
      onSubmit={handleSubmit}
    >
      <FormStageLocation currentStepIndex={currentStepIndex} steps={steps} />
      <FormHeading
        title={step.key?.replace("Form", "") + "" || "Personal Information"}
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
  );
};

export default MainFormComponent;
