"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    console.log(user?.user?.role);
    if (user.user?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  }, [user]);

  return <>{children}</>;
};

export default AdminProtectedRoute;
