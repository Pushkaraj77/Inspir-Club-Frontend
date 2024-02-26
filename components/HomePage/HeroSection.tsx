"use client";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import SolidButton from "../Shared/SolidButton";
import YourText from "@/public/assets/your.svg";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Star from "@/public/assets/star.svg";
import StartText from "@/public/assets/start.svg";
import IdentifyText from "@/public/assets/identify.svg";

const HeroSection = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth);

  const moveToSignup = () => {
    router.push("/signup");
  };
  return (
    <section className="py-10 sm:py-14 px-4 lg:px-14">
      <div className="text-xl xs:text-2xl sm:text-4xl xl:text-6xl font-bold flex items-center gap-2 xs:gap-4">
        <h1 className="min-w-max">Boost</h1>
        <Image
          src={YourText}
          alt="your"
          className="w-12 xs:w-16 sm:w-24 md:w-32 lg:w-auto"
        />
        <h1 className="min-w-max">Online Presence</h1>
        <Image src={Star} alt="star" className="w-6 xs:w-10 sm:w-auto -mt-6" />
      </div>
      <div className="text-xl xs:text-2xl sm:text-4xl xl:text-6xl font-bold flex items-center gap-2 xs:gap-4 mt-4">
        <Image
          src={StartText}
          alt="let's start"
          className="w-12 xs:w-16 sm:w-24 md:w-32 lg:w-auto"
        />
        <h1 className="min-w-max">with best Influencers</h1>
        <Image
          src={IdentifyText}
          alt="identify your next influencer"
          className="w-12 xs:w-16 sm:w-24 md:w-32 lg:w-auto"
        />
      </div>
      <p className="text-lightGray text-sm sm:text-lg font-medium md:max-w-[70vw] my-8 leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the
        industry's.
      </p>
      {!user.isLoggedIn && (
        <SolidButton className={"sm:w-44"} onClick={moveToSignup}>
          Get Started <BsArrowRight className="text-lg ml-2" />
        </SolidButton>
      )}
    </section>
  );
};

export default HeroSection;
