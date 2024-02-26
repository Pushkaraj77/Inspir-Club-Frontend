import React from "react";
import Image from "next/image";
import ProfileImage1 from "@/public/assets/profile1.png";
import ProfileImage2 from "@/public/assets/profile2.png";
import OutlinedButton from "../Shared/OutlinedButton";
import { BsArrowRight } from "react-icons/bs";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface AboutInfluencerProps {
  coverPhotoUrl: string;
  profilePhotoUrl: string;
  fullName: string;
  about: string;
}

const AboutInfluencer = ({
  coverPhotoUrl,
  profilePhotoUrl,
  fullName,
  about,
}: AboutInfluencerProps) => {
  return (
    <section className="bg-extremelyDarkGray">
      <div className="px-4 lg:px-14 pt-14 pb-14 lg:pb-36 flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col xs:flex-row justify-center gap-6 flex-1">
          <Image
            src={coverPhotoUrl ? BACKEND_URL + coverPhotoUrl : ProfileImage1}
            alt="profile image"
            className="grayscale h-[370px] w-full xs:w-[200px] sm:w-[230px] object-cover rounded-lg overflow-hidden"
            width={200}
            height={2000}
          />
          <Image
            src={
              profilePhotoUrl ? BACKEND_URL + profilePhotoUrl : ProfileImage2
            }
            alt="profile image"
            className="transform xs:translate-y-1/4 grayscale h-[370px] w-full xs:w-[200px] sm:w-[230px] object-cover rounded-lg overflow-hidden"
            width={200}
            height={200}
          />
        </div>
        <div className="flex-1 mt-10 xs:mt-20 lg:mt-10">
          <h1 className="text-2xl">
            Meet <span className="font-bold">{fullName}</span>
          </h1>
          <div className="text-lightGray flex flex-col gap-4 my-4">
            <p className="break-words">{about}</p>
          </div>
          <OutlinedButton className="w-44 mt-2">
            Know More <BsArrowRight className="text-lg ml-2" />
          </OutlinedButton>
        </div>
      </div>
    </section>
  );
};

export default AboutInfluencer;
