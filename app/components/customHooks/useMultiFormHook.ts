"use client";
import { useState, ReactElement } from "react";

export type MultiHookProps = {
  Next?: () => void;
  Back?: () => void;
  currentStepIndex: number;
  steps: ReactElement[];
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useMultiFormHook = (steps: ReactElement[]) => {
  // $ State to keep track of the current step index
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // $ Function to move to the next step in the form
  const Next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  // $ Function to move to the previous step in the form
  const Back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    Next,
    Back,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
export default useMultiFormHook;
