"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as EmailValidator from "email-validator";
import toast from "react-hot-toast";
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
import { registerInfluencerApi } from "@/api/influencer/influencerApi";

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [niche, setNiche] = useState<string>("Art");
  const [location, setLocation] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [tiktok, setTiktok] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [agreement, setAgreement] = useState<boolean>(false);
  const [profile, setProfile] = useState(null);
  const [cover, setCover] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be atleast 6 characters long");
      return;
    }
    if (agreement) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", newPassword);
      formData.append("fullName", fullName);
      formData.append("gender", gender);
      formData.append("niche", niche);
      formData.append("location", location);
      formData.append("about", about);
      formData.append("facebook", facebook);
      formData.append("youtube", youtube);
      formData.append("linkedin", linkedin);
      formData.append("tiktok", tiktok);
      formData.append("twitter", twitter);
      formData.append("website", website);
      formData.append("instagram", instagram);
      formData.append("coverPhotoUrl", cover || "");
      formData.append("profilePhotoUrl", profile || "");

      saveData(formData);
    } else {
      toast.error("Please Agree to the conditions");
    }
  };

  const saveData = async (userData: any) => {
    try {
      const data = await registerInfluencerApi(userData);
      if (data) {
        toast.success("Registered Successfully, Please Login to Continue");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error: any) {
      toast.error(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <form className="my-6 md:max-w-[60vw] mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-xl font-semibold">Basic Info</h1>
      <div className="flex flex-col gap-4 my-6">
        <input
          type="text"
          placeholder="Email*"
          className="input w-full bg-extremelyDarkGray"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password*"
          className="input w-full bg-extremelyDarkGray"
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        About Info
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <input
          type="text"
          placeholder="Full Name*"
          className="input w-full bg-extremelyDarkGray"
          value={fullName}
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <select
          className="select w-full bg-extremelyDarkGray"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <select
          className="select w-full bg-extremelyDarkGray"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          className="textarea bg-extremelyDarkGray h-56 text-[16px]"
          placeholder="About yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        Upload Image
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <CoverPhotoUpload cover={cover} setCover={setCover} />
        <ProfilePhotoUpload profile={profile} setProfile={setProfile} />
      </div>
      <h1 className="text-xl font-semibold border-t border-darkGray pt-4">
        Your Social Channels (optional)
      </h1>
      <div className="flex flex-col gap-4 my-6">
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsInstagram className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Instagram"
            className="flex-1 bg-transparent"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsFacebook className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Facebook"
            className="flex-1 bg-transparent"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsYoutube className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Youtube"
            className="flex-1 bg-transparent"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsLinkedin className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Linkedin"
            className="flex-1 bg-transparent"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsTiktok className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Tiktok"
            className="flex-1 bg-transparent"
            value={tiktok}
            onChange={(e) => setTiktok(e.target.value)}
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsTwitterX className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Twitter"
            className="flex-1 bg-transparent"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="input w-full bg-extremelyDarkGray flex items-center gap-3">
          <BsLink className="text-2xl text-mediumGray" />
          <input
            type="text"
            placeholder="Add Website"
            className="flex-1 bg-transparent"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>
      <div className="my-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex gap-3">
          <input
            type="checkbox"
            className="checkbox border-secondary checked:border-extremelyDarkGray [--chkbg:theme(colors.white)] [--chkfg:black]"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
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
