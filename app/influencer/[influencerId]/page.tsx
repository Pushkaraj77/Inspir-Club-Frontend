"use client";
import { getInfluencerByIdApi } from "@/api/influencer/influencerApi";
import AboutInfluencer from "@/components/InfluencerProfilePage/AboutInfluencer";
import CoverAndStatsSection from "@/components/InfluencerProfilePage/CoverAndStatsSection";
import InfluencerPortfolio from "@/components/InfluencerProfilePage/InfluencerPortfolio";
import { useEffect, useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";

export default function InfluencerProfilePage({
  params,
}: {
  params: { influencerId: string };
}) {
  const { influencerId } = params;
  const [loading, setLoading] = useState(true);
  const [influencer, setInfluencer] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getInfluencerByIdApi(influencerId);
      if (response) {
        setInfluencer(response);
        setLoading(false);
      }
    };

    fetchData();
  }, [influencerId]);

  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <BsArrowClockwise className="animate-spin text-5xl text-mediumGray" />
        </div>
      ) : (
        <>
          <CoverAndStatsSection
            coverPhotoUrl={influencer?.coverPhotoUrl}
            profilePhotoUrl={influencer?.profilePhotoUrl}
            fullName={influencer?.fullName}
            socialLinks={influencer?.socialLinks}
            location={influencer?.location}
          />
          <AboutInfluencer
            coverPhotoUrl={influencer?.coverPhotoUrl}
            fullName={influencer?.fullName}
            profilePhotoUrl={influencer?.profilePhotoUrl}
            about={influencer?.about}
          />
          <InfluencerPortfolio />
        </>
      )}
    </main>
  );
}
