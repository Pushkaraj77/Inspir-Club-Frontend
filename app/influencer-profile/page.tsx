import AboutInfluencer from "@/components/InfluencerProfilePage/AboutInfluencer";
import CoverAndStatsSection from "@/components/InfluencerProfilePage/CoverAndStatsSection";
import InfluencerPortfolio from "@/components/InfluencerProfilePage/InfluencerPortfolio";

export default function InfluencerProfilePage() {
  return (
    <main>
      <CoverAndStatsSection />
      <AboutInfluencer />
      <InfluencerPortfolio />
    </main>
  );
}
