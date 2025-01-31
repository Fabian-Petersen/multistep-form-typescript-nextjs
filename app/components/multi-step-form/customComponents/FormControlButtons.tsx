"use client";
import React from "react";
import { MultiHookProps } from "../../customHooks/useMultiFormHook";

interface FormControlButtonsProps extends MultiHookProps {
  onSubmit?: () => void;
  isLastStep?: boolean;
}

const FormControlButtons = ({
  Back,
  Next,
  currentStepIndex,
  steps,
  onSubmit,
}: FormControlButtonsProps) => {
  const isLastStep = currentStepIndex === steps.length - 1;

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked next");
    if (isLastStep && onSubmit) {
      console.log("lastStep:", isLastStep);
      onSubmit();
    } else if (Next) {
      Next();
    }
  };

  return (
    <div className="flex gap-6 justify-center sm:justify-end w-full">
      <button
        type="button"
        onClick={Back}
        className={`${
          currentStepIndex === 0 && "cursor-not-allowed"
        } text-white border border-red-400 hover:bg-red-400 py-2 px-6 rounded-full transition-all duration-200`}
      >
        Back
      </button>
      <button
        type="button"
        onClick={handleNextClick}
        className="text-white hover:bg-blue-500 border-blue-500 border hover:bg-opacity-80 py-2 px-6 rounded-full transition-all duration-200"
      >
        {isLastStep ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default FormControlButtons;
