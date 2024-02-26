import InfluencersSection from "@/components/HomePage/InfluencersSection";
import Navbar from "@/components/Shared/Navbar";

export default function InfluencersPage() {
  return (
    <main>
      <Navbar />
      <InfluencersSection showMore={false} />
    </main>
  );
}
