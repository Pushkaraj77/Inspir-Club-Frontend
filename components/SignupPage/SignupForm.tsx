import React from "react";
import CoverPhotoUpload from "./CoverPhotoUpload";
import ProfilePhotoUpload from "./ProfilePhotoUpload";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTiktok,
  BsTwitterX,
  BsLink,
} from "react-icons/bs";
import SolidButton from "../Shared/SolidButton";

const SignupForm = () => {
  return (
    <form className="my-6 md:max-w-[60vw] mx-auto">
      <h1 className="text-xl font-semibold">Login Info</h1>
      <div className="flex flex-col gap-4 my-6">
        <input
          type="text"
          placeholder="Email"
          className="input w-full bg-extremelyDarkGray"
        />
        <input
          type="password"
          placeholder="New Password"
          className="input w-full bg-extremelyDarkGray"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input w-full bg-extremelyDarkGray"
        />
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        About Info
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <input
          type="text"
          placeholder="Full Name"
          className="input w-full bg-extremelyDarkGray"
        />
        <select
          className="select w-full bg-extremelyDarkGray"
          placeholder="Gender"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <select
          className="select w-full bg-extremelyDarkGray"
          placeholder="Select Niche"
        >
          <option>Art</option>
          <option>Business</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Family</option>
          <option>Fashion</option>
          <option>Fitness</option>
          <option>Food</option>
          <option>Gaming</option>
          <option>Health</option>
          <option>Music</option>
          <option>Politics</option>
          <option>Science</option>
          <option>Sports</option>
          <option>Technology</option>
          <option>Travel</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          className="input w-full bg-extremelyDarkGray"
        />
        <textarea
          className="textarea bg-extremelyDarkGray h-56"
          placeholder="About yourself"
        ></textarea>
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        Upload Image
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <CoverPhotoUpload />
        <ProfilePhotoUpload />
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        Your Social Channels
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsInstagram className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Instagram"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsFacebook className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Facebook"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsYoutube className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Youtube"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsLinkedin className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Linkedin"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsTiktok className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Tiktok"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsTwitterX className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Twitter"
            className="flex-1 bg-transparent"
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsLink className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Website"
            className="flex-1 bg-transparent"
          />
        </div>
      </div>
      <div className="my-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex gap-3">
          <input
            type="checkbox"
            className="checkbox border-secondary checked:border-extremelyDarkGray [--chkbg:theme(colors.white)] [--chkfg:black]"
          />
          <div>
            <p className="xs:text-lg -mt-1">
              I agree that all the content belongs to me
            </p>
            <p className="text-lightGray italic">We respect your privacy</p>
          </div>
        </div>
        <SolidButton className="w-full lg:w-44">Save</SolidButton>
      </div>
    </form>
  );
};

export default SignupForm;
