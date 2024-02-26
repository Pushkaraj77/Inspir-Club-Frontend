"use client";
import React, { useState } from "react";
import * as EmailValidator from "email-validator";
import { useDispatch } from "react-redux";
import { onLogin } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CustomModal from "../Shared/CustomModal";
import SolidButton from "../Shared/SolidButton";
import CustomInput from "../Shared/CustomInput";
import { loginApi } from "@/api/influencer/influencerApi";
import ForgetPasswordModal from "./ForgetPasswordModal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignupClick: () => void;
}

const LoginModal = ({ isOpen, onClose, onSignupClick }: LoginModalProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openForgetModal, setOpenForgetPasswordModal] = useState(false);

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value.trim();
    const password = e.currentTarget.password.value.trim();

    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      toast.error("Please enter a password");
      return;
    }
    const userData = { email, password };
    try {
      const data = await loginApi(userData);
      if (data) {
        dispatch(onLogin(data.data));
        toast.success("Successfully logged in");
        router.replace("/");
        onClose();
      }
    } catch (error: any) {
      toast.error(error.response.data.error || "Something went wrong");
    }
  };
  const openForgetPasswordModal = () => {
    setOpenForgetPasswordModal(true);
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="mt-8 min-w-[30vw]">
        <h1 className="text-2xl font-semibold">
          To Sign in, enter your email address
        </h1>
        <form onSubmit={loginHandler} className="flex flex-col gap-3 my-6">
          <CustomInput
            type="email"
            id="email"
            label="Email address"
            className="w-full"
            placeholder="example@gmail.com"
          />
          <CustomInput
            type="password"
            id="password"
            label="Password"
            className="w-full"
            placeholder="John!@#123"
          />
          <SolidButton className="w-full mt-3">Login</SolidButton>
        </form>
        <div className="mt-6 text-center flex flex-col gap-3">
          <p>
            New to Inspir.club?{" "}
            <button
              className="text-mediumGray underline underline-offset-2 font-medium hover:text-lightGray"
              onClick={onSignupClick}
            >
              Create an account
            </button>
          </p>
          <button
            className="text-mediumGray underline underline-offset-2 font-medium hover:text-lightGray"
            onClick={openForgetPasswordModal}
          >
            Forgot password?{" "}
          </button>
        </div>
      </div>
      <ForgetPasswordModal
        isOpen={openForgetModal}
        onClose={() => setOpenForgetPasswordModal(false)}
      />
    </CustomModal>
  );
};

export default LoginModal;
