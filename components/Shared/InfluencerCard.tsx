import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  BsTiktok,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsGlobe,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import TagItem from "./TagItem";

interface InfluencerCardProps {
  id: string;
  name: string;
  location: string;
  image: StaticImageData;
  niche: string;
  socialLinks: {
    tiktok: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    website: string;
    youtube: string;
    twitter: string;
  };
}

const InfluencerCard = ({
  id,
  name,
  location,
  image,
  niche,
  socialLinks,
}: InfluencerCardProps) => {
  const router = useRouter();
  const imageUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "") + image;

  return (
    <div
      className="bg-extremelyDarkGray p-4 rounded-lg cursor-pointer"
      onClick={() => router.push(`/influencer/${id}`)}
    >
      <div className="rounded-lg overflow-hidden">
        <div className="relative h-[250px] w-full object-cover">
          <Image
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt="influencer"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row items-center justify-between md:items-start md:justify-start md:flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex items-center justify-end gap-3 text-mediumGray flex-wrap">
            {socialLinks?.tiktok && (
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
              <button className="cursor-pointer hover:bg-black rounded p-1">
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
        <div className="flex items-center gap-1 my-3">
          <IoLocationOutline className="text-mediumGray text-lg" />
          <p className="text-lightGray">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <TagItem>{niche}</TagItem>

          {/* {tags?.map((tag: string, index: number) => (
            <TagItem key={index}>{tag}</TagItem>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;
