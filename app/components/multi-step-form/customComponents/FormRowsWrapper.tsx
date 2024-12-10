// $ This component is used to wrap the individual form rows in a grid layout for consistency providing a single reference to manage the grid layout.

import React, { ReactNode } from "react";

const FormRowsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-6 w-full h-auto">{children}</div>
  );
};

export default FormRowsWrapper;
