"use client";
import React, { useState } from "react";
import SolidButton from "../Shared/SolidButton";
import * as EmailValidator from "email-validator";
import { registerUserApi } from "@/api/user/userApi";
import toast from "react-hot-toast";

const UserSignupForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [agreement, setAgreement] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be atleast 6 characters long");
      return;
    }
    if (agreement) {
      const userData = {
        email,
        password: newPassword,
        address,
        phoneNumber: phone,
        firstName,
        lastName,
      };
      saveData(userData);
    } else {
      toast.error("Please Accept the agreement");
    }
  };

  const saveData = async (userData: any) => {
    try {
      const data = await registerUserApi(userData);
      if (data) {
        toast.success("Registered Successfully, Please Login to Continue");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <form className="my-6 md:max-w-[60vw] mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-xl font-semibold">Login Info</h1>
      <div className="flex flex-col gap-4 my-6">
        <input
          type="text"
          placeholder="Email"
          className="input w-full bg-extremelyDarkGray"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="input w-full bg-extremelyDarkGray"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input w-full bg-extremelyDarkGray"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        About Info
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <input
          type="text"
          placeholder="First Name"
          className="input w-full bg-extremelyDarkGray"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input w-full bg-extremelyDarkGray"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input w-full bg-extremelyDarkGray"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="input w-full bg-extremelyDarkGray"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="my-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex gap-3">
          <input
            type="checkbox"
            className="checkbox border-secondary checked:border-extremelyDarkGray [--chkbg:theme(colors.white)] [--chkfg:black]"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <div>
            <p className="xs:text-lg -mt-1">
              I agree that all the content belongs to me
            </p>
            <p className="text-lightGray italic">We respect your privacy</p>
          </div>
        </div>
        <SolidButton className="w-full lg:w-44">Save</SolidButton>
      </div>
    </form>
  );
};

export default UserSignupForm;
