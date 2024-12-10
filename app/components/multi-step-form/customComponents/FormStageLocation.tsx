// $ Component indicates in the top right corner pn which step the user is currently

import React from "react";
import { MultiHookProps } from "../../customHooks/useMultiFormHook";

const FormStageLocation = ({ currentStepIndex, steps }: MultiHookProps) => {
  return (
    <div className="absolute top-[5%] right-[5%]">
      {currentStepIndex + 1} / {steps.length}
    </div>
  );
};

export default FormStageLocation;
