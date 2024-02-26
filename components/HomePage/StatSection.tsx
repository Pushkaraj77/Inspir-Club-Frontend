import React from "react";

const StatCard = ({ title, subTitle }: any) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="text-lightGray text-xs md:text-sm">{subTitle}</p>
    </div>
  );
};

const STATS_DATA = [
  {
    id: 1,
    title: "100k+",
    subTitle: "Verified Influencers",
  },
  {
    id: 2,
    title: "50k+",
    subTitle: "Top Brands & Startups",
  },
  {
    id: 3,
    title: "30k+",
    subTitle: "Verified Influencers",
  },
  {
    id: 4,
    title: "150k+",
    subTitle: "Verified Influencers",
  },
];

const StatSection = () => {
  return (
    <section className="bg-extremelyDarkGray py-14 px-4 lg:px-14 grid grid-cols-2 sm:grid-cols-4 items-center gap-4 md:gap-6 ">
      {STATS_DATA.map((stat: any) => (
        <StatCard key={stat.id} title={stat.title} subTitle={stat.subTitle} />
      ))}
    </section>
  );
};

export default StatSection;
