"use client";
import React from "react";
import Image from "next/image";
import SocialMediaImg from "@/public/assets/social-media.svg";
import SolidButton from "../Shared/SolidButton";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const SocialMediaSection = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth);

  const moveToSignup = () => {
    router.push("/signup");
  };

  return (
    <section className="flex flex-col-reverse md:flex-row justify-between py-14 px-4 lg:px-14">
      <div className="flex-1 lg:mt-10">
        <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold lg:leading-[60px]">
          Connect all the social networks you love
        </h1>
        <p className="my-6 lg:my-10 text-lightGray">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply
          dummy.
        </p>
        {!user.isLoggedIn && (
          <SolidButton className={"sm:w-44"} onClick={moveToSignup}>
            Get Started <BsArrowRight className="text-lg ml-2" />
          </SolidButton>
        )}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={SocialMediaImg} alt="social media" />
      </div>
    </section>
  );
};

export default SocialMediaSection;
