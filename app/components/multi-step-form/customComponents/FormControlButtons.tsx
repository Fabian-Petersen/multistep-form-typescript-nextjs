"use client";
// $ Custom Component for the form control buttons (Back and Next)

import React from "react";
import { MultiHookProps } from "../../customHooks/useMultiFormHook";

const FormControlButtons = ({
  Back,
  currentStepIndex,
  steps,
}: MultiHookProps) => {
  return (
    <div className="flex gap-6 justify-center sm:justify-end w-full">
      <button
        type="button"
        onClick={Back}
        className={`${
          currentStepIndex === 0 && "cursor-not-allowed"
        } hover:text-white border border-red-400 hover:bg-red-400 py-2 px-6 rounded-full transition-all duration-200`}
      >
        Back
      </button>
      <button
        type="submit"
        className="hover:text-white hover:bg-blue-500 border-blue-500 border hover:bg-opacity-80 py-2 px-6 rounded-full transition-all duration-200"
      >
        {currentStepIndex === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default FormControlButtons;
