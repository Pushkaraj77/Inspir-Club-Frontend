import React from "react";

const OutlinedButton = ({ children, className, onClick, ...props }: any) => {
  return (
    <button
      className={`btn btn-outline btn-primary sm:min-w-[7rem] ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
