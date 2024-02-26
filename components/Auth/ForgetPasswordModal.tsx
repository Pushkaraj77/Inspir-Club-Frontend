"use client";
import React from "react";
import * as EmailValidator from "email-validator";
import toast from "react-hot-toast";
import CustomModal from "../Shared/CustomModal";
import SolidButton from "../Shared/SolidButton";
import CustomInput from "../Shared/CustomInput";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgetPasswordModal = ({ isOpen, onClose }: LoginModalProps) => {
  const forgetPasswordHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value.trim();

    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.error("Functionality Not Implemented");
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="mt-8 min-w-[30vw]">
        <h1 className="text-2xl font-semibold">Forgot Password?</h1>
        <form
          onSubmit={forgetPasswordHandler}
          className="flex flex-col gap-3 my-6"
        >
          <CustomInput
            type="email"
            id="email"
            label="Email address"
            className="w-full"
            placeholder="example@gmail.com"
          />
          <SolidButton className="w-full mt-3">Send Token</SolidButton>
        </form>
      </div>
    </CustomModal>
  );
};

export default ForgetPasswordModal;
