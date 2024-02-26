"use client";
import React, { useState } from "react";
import { onLogout } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { FaUser, FaUserCheck, FaBars } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = ({
  selectedOption,
  handleOptionClick,
}: {
  selectedOption: string;
  handleOptionClick: (option: string) => void;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(onLogout());
    router.replace("/signup");
  };
  return (
    <>
      <button
        className={`fixed right-[5%] m-2 block sm:hidden z-10 p-2 rounded-full bg-white text-gray-800`}
        onClick={toggleSidebar}
      >
        <FaBars size={25} />
      </button>
      <div
        className={`fixed z-10 top-0 left-0 h-screen sm:relative sm:h-[85vh] sm:w-64 bg-gray-800 text-white p-4 pl-0 pr-0 mt-4 sm:mt-0 rounded mb-4 flex flex-col justify-between overflow-y-auto sm:h-[85vh] ${
          isSidebarOpen ? "block" : "hidden sm:block"
        }`}
      >
        <ul className="space-y-2 m-2">
          <li>
            <a
              className={`flex items-center p-2 cursor-pointer rounded ${
                selectedOption === "Influencers"
                  ? "bg-white text-gray-800 hover:bg-white"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => handleOptionClick("Influencers")}
            >
              <FaUserCheck size={25} />
              <span className="font-medium p-2">Users</span>
            </a>
          </li>
        </ul>
        <button className="flex items-center p-2">
          <RiLogoutBoxLine size={25} />
          <span className="font-medium p-2" onClick={handleLogout}>
            Logout
          </span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
