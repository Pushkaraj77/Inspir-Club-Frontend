"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const LoginProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    if (user?.user) {
      router.push("/");
    } else {
      router.push("/signup");
    }
  }, [user]);

  return <>{children}</>;
};

export default LoginProtectedRoute;
