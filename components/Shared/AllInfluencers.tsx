"use client";
import React, { useState } from "react";
import InfluencerCard from "./InfluencerCard";
import ShowMoreCard from "./ShowMoreCard";
import Pagination from "react-js-pagination";
import SolidButton from "./SolidButton";
import { BsArrowRight } from "react-icons/bs";

type Influencer = {
  _id: string;
  fullName: string;
  location: string;
  profilePhotoUrl: any;
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
};

interface InfluencerDataProps {
  influencers: Influencer[];
  resultPerPage: number;
  currentPage: number;
  influencersCount: number;
  setCurrentPageNo: (currentPage: number) => void;
  showMore?: boolean;
}

const AllInfluencers = ({
  influencers,
  resultPerPage,
  currentPage,
  influencersCount,
  setCurrentPageNo,
  showMore = true,
}: InfluencerDataProps) => {
  const [itemsToShow, setItemsToShow] = useState(showMore ? 7 : 8);

  const loadMore = () => {
    setCurrentPageNo(currentPage + 1);
    setItemsToShow((prev) => prev + 8);
  };
  return (
    <>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {influencers.slice(0, itemsToShow).map((influencer: Influencer) => (
          <InfluencerCard
            id={influencer?._id}
            key={influencer?._id}
            name={influencer?.fullName}
            location={influencer?.location}
            image={influencer?.profilePhotoUrl}
            niche={influencer?.niche}
            socialLinks={influencer?.socialLinks}
          />
        ))}
        {showMore && (
          <>
            <ShowMoreCard totalInfluencers={influencersCount} />
          </>
        )}
      </div>
      {itemsToShow < influencersCount && !showMore && (
        <div className="mt-8 flex items-center justify-center">
          <span onClick={loadMore}>
            <SolidButton className={"sm:w-44"}>
              Load More <BsArrowRight className="text-lg ml-2" />
            </SolidButton>
          </span>
        </div>
      )}
    </>
  );
};

export default AllInfluencers;
