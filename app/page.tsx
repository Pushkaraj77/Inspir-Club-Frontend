import HeroSection from "@/components/HomePage/HeroSection";
import InfluencersSection from "@/components/HomePage/InfluencersSection";
import SocialMediaSection from "@/components/HomePage/SocialMediaSection";
import StatSection from "@/components/HomePage/StatSection";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatSection />
      <SocialMediaSection />
      <InfluencersSection />
    </main>
  );
}
