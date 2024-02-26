"use client";
import React, { useState } from "react";
import InfluencerSignupForm from "./InfluencerSignupForm";
import UserSignupForm from "./UserSignupForm";

const SignUpRootPage = () => {
  const [activeTab, setActiveTab] = useState("user");
  return (
    <>
      <div>
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 "
          role="tablist"
        >
          <li
            role="presentation"
            className="flex-grow basis-0 text-center m-1 sm:m-4 flex justify-center sm:justify-end items-center"
          >
            <button
              className={`my-2 w-full sm:w-1/2 block pb-3.5 pt-4 text-lg border border-4 border-white uppercase font-sans font-bold hover:isolate hover:text-black hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent ${
                activeTab === "user" ? "bg-white text-black" : "text-white"
              }`}
              onClick={() => setActiveTab("user")}
            >
              User
            </button>
          </li>
          <li
            role="presentation"
            className="flex-grow basis-0 text-center m-1 sm:m-4 flex justify-center sm:justify-start items-center"
          >
            <button
              className={`my-2 w-full sm:w-1/2 block pb-3.5 pt-4 text-lg border border-4 border-white uppercase font-sans font-bold hover:isolate hover:text-black hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent ${
                activeTab === "influencer"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("influencer")}
            >
              Influencer
            </button>
          </li>
        </ul>

        <div className="mb-6">
          {activeTab === "user" && (
            <div id="tabs-influencer02" role="tabpanel">
              <UserSignupForm />
            </div>
          )}
          {activeTab === "influencer" && (
            <div id="tabs-influencer02" role="tabpanel">
              <InfluencerSignupForm />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUpRootPage;
