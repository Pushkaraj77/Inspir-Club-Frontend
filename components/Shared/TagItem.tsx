import React from "react";

const TagItem = ({ children }: any) => {
  return (
    <div className="bg-darkGray rounded-sm px-4 py-1 text-xs text-white">
      {children}
    </div>
  );
};

export default TagItem;
