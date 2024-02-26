"use client";
import React from "react";
import {
  BsInstagram,
  BsYoutube,
  BsFacebook,
  BsTiktok,
  BsThreads,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import Profile1 from "@/public/assets/profile1.png";
import Profile2 from "@/public/assets/profile2.png";
import Profile3 from "@/public/assets/profile3.png";
import Profile4 from "@/public/assets/profile4.png";
import Profile5 from "@/public/assets/influencer1.png";
import Profile6 from "@/public/assets/influencer2.png";
import Profile7 from "@/public/assets/influencer3.png";
import Profile8 from "@/public/assets/influencer4.png";
import Image, { StaticImageData } from "next/image";
import TagItem from "../Shared/TagItem";

const SOCIAL_MEDIA = [
  {
    id: 1,
    name: "Instagram",
    icon: <BsInstagram />,
  },
  {
    id: 2,
    name: "Youtube",
    icon: <BsYoutube />,
  },
  {
    id: 3,
    name: "Facebook",
    icon: <BsFacebook />,
  },
  {
    id: 4,
    name: "Tiktok",
    icon: <BsTiktok />,
  },
  {
    id: 5,
    name: "Threads",
    icon: <BsThreads />,
  },
  {
    id: 6,
    name: "Linkedin",
    icon: <BsLinkedin />,
  },
  {
    id: 7,
    name: "X.com",
    icon: <BsTwitterX />,
  },
];

const ProfileButton = ({
  children,
  isActive = false,
  onClick,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`bg-transparent border border-white rounded-2xl px-4 md:px-8 py-2 font-medium flex items-center gap-2 transition-all duration-200 ease-in
        ${isActive ? "bg-white text-black" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const FeedImage = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="w-full h-[378px]">
      <Image
        src={image}
        alt="feed"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

const InfluencerPortfolio = () => {
  const [activeProfile, setActiveProfile] = React.useState("instagram");

  return (
    <section className="px-4 lg:px-14 py-14">
      <h1 className="text-3xl font-bold text-center">Portfolio</h1>
      <div className="mt-10">
        <div className="flex xl:justify-center items-center gap-4 flex-wrap">
          {SOCIAL_MEDIA.map((social) => (
            <ProfileButton
              key={social.id}
              isActive={activeProfile === social.name.toLowerCase()}
              onClick={() => setActiveProfile(social.name.toLowerCase())}
            >
              {social.icon}
              <span className="hidden md:block">{social.name}</span>
            </ProfileButton>
          ))}
        </div>
      </div>
      <div className="mt-10 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10">
        <FeedImage image={Profile1} />
        <FeedImage image={Profile2} />
        <FeedImage image={Profile3} />
        <FeedImage image={Profile4} />
        <FeedImage image={Profile5} />
        <FeedImage image={Profile6} />
        <FeedImage image={Profile7} />
        <FeedImage image={Profile8} />
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold">Releated Tags</h1>
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <TagItem>Instagram Influencer</TagItem>
          <TagItem>Youtube Influencer</TagItem>
          <TagItem>Facebook Influencer</TagItem>
          <TagItem>Tiktok Influencer</TagItem>
          <TagItem>Threads Influencer</TagItem>
          <TagItem>Linkedin Influencer</TagItem>
          <TagItem>X.com Influencer</TagItem>
        </div>
      </div>
    </section>
  );
};

export default InfluencerPortfolio;
