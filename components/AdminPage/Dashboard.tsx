"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Users");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex">
      <Sidebar
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
      />
      <Content />
    </div>
  );
};

export default Dashboard;
