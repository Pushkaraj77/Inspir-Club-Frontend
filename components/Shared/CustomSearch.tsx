"use client";
import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import SolidButton from "./SolidButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AllInfluencers from "./AllInfluencers";
import { getAllInfluencersApi } from "@/api/influencer/influencerApi";

const niche = [
  { id: 1, name: "All" },
  { id: 2, name: "Art" },
  { id: 3, name: "Business" },
  { id: 4, name: "Education" },
  { id: 5, name: "Entertainment" },
  { id: 6, name: "Family" },
  { id: 7, name: "Fashion" },
  { id: 8, name: "Fitness" },
  { id: 9, name: "Food" },
  { id: 10, name: "Gaming" },
  { id: 11, name: "Health" },
  { id: 12, name: "Music" },
  { id: 13, name: "Politics" },
  { id: 14, name: "Science" },
  { id: 15, name: "Sports" },
  { id: 16, name: "Technology" },
  { id: 17, name: "Travel" },
  { id: 18, name: "Other" },
];

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

interface InfluencerApiData {
  influencers: Influencer[];
  influencersCount: number;
  resultPerPage: number;
  success: boolean;
}

const CustomSearch = ({ showMore = true }: { showMore?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const keyValue = searchParams.get("keyword");
  const platformValue = searchParams.get("platform");
  const [selectedNiche, setSelectedNiche] = useState<any>(
    platformValue ?? niche[0]
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultPerPage, setResultsPerPage] = useState<number>(5);
  const [influencersCount, setInfluencersCount] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>(keyValue ?? "");
  const [influencers, setInfluencers] = useState<Influencer[]>([]);

  useEffect(() => {
    getAllInfluencers();
  }, [keyword, selectedNiche, currentPage]);

  const getAllInfluencers = async () => {
    let tag = selectedNiche?.name;
    if (selectedNiche?.name == "All") {
      tag = "";
    }
    const response = (await getAllInfluencersApi(
      keyword,
      tag,
      currentPage
    )) as InfluencerApiData;
    const influencers = response?.influencers;
    if (currentPage == 1) {
      setInfluencers(influencers);
    } else {
      setInfluencers((prev) => [...prev, ...influencers]);
    }
    setInfluencersCount(response?.influencersCount);
  };

  const setCurrentPageNo = (e: any) => {
    setCurrentPage(e);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    let tag = selectedNiche?.name;
    if (selectedNiche?.name == "All") {
      tag = "";
    }
    if (tag && keyword) {
      router.push(`/influencers?platform=${tag}&keyword=${keyword}`);
    } else if (keyword) {
      router.push(`/influencers?keyword=${keyword}`);
    } else if (tag) {
      router.push(`/influencers?platform=${tag}`);
    } else {
      router.push(`/influencers?platform=${tag}&keyword=${keyword}`);
    }
    setCurrentPage(1);
  };

  return (
    <>
      <div className="bg-extremelyDarkGray relative hidden sm:flex items-center rounded-md px-3 py-2">
        <Listbox value={selectedNiche} onChange={setSelectedNiche}>
          <Listbox.Button className="bg-transparent outline-none flex-1 px-4 placeholder:text-lightGray">
            {selectedNiche.name}
          </Listbox.Button>
          <Listbox.Options className="bg-mediumGray w-1/2 h-[400px] overflow-y-auto cursor-pointer absolute top-20 z-50 ml-0 pl-0 custom-scroll-bar">
            {niche.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className="hover:bg-black hover:text-white p-4"
              >
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>

        <div className="bg-mediumGray w-[2px] h-10"></div>
        <input
          type="text"
          placeholder="Enter keyword, niche, or category"
          className="flex-1 bg-transparent outline-none px-4 placeholder:text-lightGray"
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button className="btn btn-square btn-primary" onClick={handleSearch}>
          <BsSearch className="text-xl" />
        </button>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-row">
          <div className="w-full bg-extremelyDarkGray flex items-center rounded-md pl-6 pr-4 py-2 mt-3 mr-1">
            <Listbox value={selectedNiche} onChange={setSelectedNiche}>
              <Listbox.Button className="bg-transparent outline-none flex-1 px-4 placeholder:text-lightGray">
                {selectedNiche.name}
              </Listbox.Button>
              <Listbox.Options className="bg-black w-1/2 h-full cursor-pointer absolute top-20 ml-0 pl-0">
                {niche.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    value={item}
                    className="hover:bg-black hover:text-white p-4"
                  >
                    {item.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
          <div className="bg-extremelyDarkGray flex items-center rounded-md pl-6 pr-4 py-2 mt-3 ml-1">
            <input
              type="text"
              placeholder="Enter keyword, niche, or category"
              className="flex-1 bg-transparent outline-none placeholder:text-lightGray"
              value={keyword}
              onChange={handleKeywordChange}
            />
            <button
              className="opacity-0 xs:opacity-100 btn btn-square btn-primary btn-sm"
              onClick={handleSearch}
            >
              <BsSearch />
            </button>
          </div>
        </div>
        <SolidButton
          className={"w-full mt-3 py-3 xs:hidden"}
          onClick={handleSearch}
        >
          Search <BsSearch className="text-lg ml-2" />
        </SolidButton>
      </div>
      <AllInfluencers
        influencers={influencers}
        resultPerPage={resultPerPage}
        currentPage={currentPage}
        influencersCount={influencersCount}
        setCurrentPageNo={setCurrentPageNo}
        showMore={showMore}
      />
    </>
  );
};

export default CustomSearch;
