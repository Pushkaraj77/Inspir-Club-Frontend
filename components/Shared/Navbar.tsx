"use client";
import React from "react";
import Link from "next/link";
import SolidButton from "./SolidButton";
import OutlinedButton from "./OutlinedButton";
import LoginModal from "../Auth/LoginModal";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AvatarDropdown from "./AvatarDropdown";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const user = useSelector((state: RootState) => state.auth);

  const signupPage = () => {
    if (pathname === "/signup") {
      setIsLoginModalOpen(false);
    } else {
      router.push("/signup");
      setIsLoginModalOpen(false);
    }
  };
  console.log(user);

  return (
    <>
      <nav
        className={`flex justify-between items-center gap-4 py-4 px-4 lg:px-14`}
      >
        <Link href="/" className="text-2xl font-black">
          Inspir.club
        </Link>
        {user.isLoggedIn ? (
          <>
            <AvatarDropdown />
          </>
        ) : (
          <>
            <div className="flex items-center gap-3 sm:gap-6 font-medium">
              <OutlinedButton onClick={() => setIsLoginModalOpen(true)}>
                Sign in
              </OutlinedButton>
              <SolidButton onClick={() => router.push("/signup")}>
                Sign up
              </SolidButton>
            </div>
          </>
        )}
      </nav>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSignupClick={() => signupPage()}
      />
    </>
  );
};

export default Navbar;
