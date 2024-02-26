import React from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer grid-cols-2 md:grid-cols-none py-14 px-4 lg:px-14 bg-extremelyDarkGray">
        <aside>
          <Link href="/" className="text-2xl font-black">
            Inspir.club
          </Link>
          <p className="w-[90vw] sm:w-[80vw] md:max-w-[30vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </aside>
        <nav></nav>
        <nav>
          <header className="text-lg font-bold">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="text-lg font-bold">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="text-lg font-bold">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer py-4 px-4 lg:px-14 border-t-2 bg-extremelyDarkGray border-primary">
        <aside className="flex items-center">
          <p className="text-lg">&copy;</p>
          <Link href="/" className="text-lg font-black">
            Inspir.club
          </Link>
          <p>2023. All rights reserved.</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-8">
            <BsFacebook className="text-2xl cursor-pointer" />
            <BsInstagram className="text-2xl cursor-pointer" />
            <BsYoutube className="text-2xl cursor-pointer" />
            <BsLinkedin className="text-2xl cursor-pointer" />
            <BsTwitter className="text-2xl cursor-pointer" />
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
