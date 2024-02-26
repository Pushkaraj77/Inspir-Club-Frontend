import React from "react";

const SolidButton = ({ children, className, onClick, ...props }: any) => {
  return (
    <button
      className={`btn btn-primary sm:min-w-[7rem] ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default SolidButton;
