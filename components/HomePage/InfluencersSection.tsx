import React from "react";
import CustomSearch from "../Shared/CustomSearch";

const InfluencersSection = ({ showMore = true }: { showMore?: boolean }) => {
  return (
    <section className="py-14 px-4 lg:px-14 lg:pt-0">
      <div className="text-center">
        <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold lg:leading-[60px]">
          Explore Influencers
        </h1>
        <p className="text-lightGray md:max-w-[60vw] mx-auto mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply
          dummy.
        </p>
      </div>
      <div className="mt-10">
        <CustomSearch showMore={showMore} />
      </div>
    </section>
  );
};

export default InfluencersSection;
