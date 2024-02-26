"use client";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import InfluencerGroupImage from "@/public/assets/influencers-group.png";
import { useRouter } from "next/navigation";

const ShowMoreCard = ({ totalInfluencers }: { totalInfluencers: number }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/influencers");
  };

  return (
    <div className="bg-extremelyDarkGray p-4 rounded-lg">
      <div className="show-more-card h-full rounded-md flex flex-col justify-center items-center gap-4 min-h-[350px] sm:min-h-max">
        <button className="btn btn-circle" onClick={handleNavigate}>
          <BsArrowRight className="text-xl" />
        </button>
        <h1
          className="text-xl font-bold hover:underline cursor-pointer"
          onClick={handleNavigate}
        >
          Show All
        </h1>
        <p className="text-lightGray">{totalInfluencers} influencers</p>
        <Image src={InfluencerGroupImage} alt="influencers" />
      </div>
    </div>
  );
};

export default ShowMoreCard;
