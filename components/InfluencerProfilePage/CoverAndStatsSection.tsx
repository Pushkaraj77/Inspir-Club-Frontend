import React from "react";
import Image from "next/image";
import CoverImage from "@/public/assets/cover-image.png";
import InfoBgLeft from "@/public/assets/info-bg-left.png";
import InfoBgRight from "@/public/assets/info-bg-right.png";
import InfluencerImage1 from "@/public/assets/influencer2.png";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTwitter,
  BsTiktok,
  BsShare,
  BsGlobe,
} from "react-icons/bs";

import { IoLocationOutline } from "react-icons/io5";
import SolidButton from "../Shared/SolidButton";
import Navbar from "../Shared/Navbar";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const StatsCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-extremelyDarkGray px-2 py-8 rounded-lg">
      <h1 className="text-xl xs:text-3xl font-bold">{value}</h1>
      <div className="flex justify-center items-center gap-1 mt-2 text-xs sm:text-sm md:text-lg">
        {icon}
        <p className="text-lightGray text-center">{title}</p>
      </div>
    </div>
  );
};

const STATS_DATA = [
  {
    id: 1,
    title: "Instagram",
    value: "252k+",
    icon: <BsInstagram className="text-lightGray" />,
  },
  {
    id: 2,
    title: "Facebook",
    value: "39.4k+",
    icon: <BsFacebook className="text-lightGray" />,
  },
  {
    id: 3,
    title: "Youtube",
    value: "12.2M",
    icon: <BsYoutube className="text-lightGray" />,
  },
  {
    id: 4,
    title: "Linkedin",
    value: "56.9k+",
    icon: <BsLinkedin className="text-lightGray" />,
  },
  {
    id: 5,
    title: "Twitter",
    value: "48.7k+",
    icon: <BsTwitter className="text-lightGray" />,
  },
  {
    id: 6,
    title: "Tiktok",
    value: "789k+",
    icon: <BsTiktok className="text-lightGray" />,
  },
];

interface CoverAndStatsSectionProps {
  coverPhotoUrl: string;
  fullName: string;
  location: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    tiktok?: string;
    twitter?: string;
    website?: string;
  };
  profilePhotoUrl: string;
}

const CoverAndStatsSection = ({
  coverPhotoUrl,
  fullName,
  location,
  socialLinks,
  profilePhotoUrl,
}: CoverAndStatsSectionProps) => {
  return (
    <section className="">
      <div
        className="h-[101vh] lg:h-auto flex flex-col relative"
        style={{
          backgroundImage: coverPhotoUrl
            ? `url(${BACKEND_URL + coverPhotoUrl})`
            : `url(${CoverImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="w-full h-full lg:h-[70vh]"></div>
        <div
          className={`absolute bottom-6 md:bottom-14 right-6 md:right-14 z-10 text-4xl xs:text-5xl uppercase text-right`}
        >
          <h1 className="my-2">Creator.</h1>
          <h1 className="my-2">Global Influencer.</h1>
          <h1 className="my-2">Entrepreneur.</h1>
          <h1 className="my-2">Investor.</h1>
        </div>
      </div>
      <div className="pt-10 lg:pt-0 lg:-mt-8 px-4 lg:px-14 grid grid-cols-3 lg:grid-cols-6 gap-3 xs:gap-6 z-50 relative">
        {STATS_DATA.map((stat) => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
      <div className="py-10 px-4 lg:px-14">
        <div
          className="bg-extremelyDarkGray p-8 rounded-lg flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{
            backgroundImage: `url(${InfoBgLeft.src}), url(${InfoBgRight.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom, right top",
            backgroundSize: "contain",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-start text-center sm:text-left gap-4">
            <Image
              src={
                profilePhotoUrl
                  ? BACKEND_URL + profilePhotoUrl
                  : InfluencerImage1
              }
              alt="influencer"
              className="w-24 h-24 object-cover rounded-full"
              width={96}
              height={96}
            />
            <div>
              <h1 className="text-xl font-bold">{fullName}</h1>
              <div className="flex items-center justify-center sm:justify-start gap-1 my-2">
                <IoLocationOutline className="text-mediumGray text-lg" />
                <p className="text-lightGray">{location}</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-mediumGray">
                {socialLinks?.tiktok && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTiktok />
                    </a>
                  </button>
                )}

                {socialLinks?.instagram && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsInstagram />
                    </a>
                  </button>
                )}
                {socialLinks?.linkedin && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin />
                    </a>
                  </button>
                )}
                {socialLinks?.facebook && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsFacebook />
                    </a>
                  </button>
                )}
                {socialLinks?.youtube && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsYoutube />
                    </a>
                  </button>
                )}
                {socialLinks?.twitter && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTwitter />
                    </a>
                  </button>
                )}
                {socialLinks?.website && (
                  <button className="cursor-pointer">
                    <a
                      href={socialLinks?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGlobe />
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto gap-3 mt-3 sm:mt-0">
            <SolidButton className="w-[80%] sm:w-44">Contact me</SolidButton>
            <button className="btn btn-square btn-outline btn-primary">
              <BsShare className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverAndStatsSection;
