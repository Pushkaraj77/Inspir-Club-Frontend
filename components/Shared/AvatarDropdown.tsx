"use client";
import React, { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { onLogout } from "@/redux/slices/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AvatarDropdown() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState("John Doe");

  useEffect(() => {
    if (user.user?.fullName) {
      setUsername(user.user.fullName);
    } else {
      setUsername(user.user?.firstName + " " + user.user?.lastName);
    }
  }, []);

  const logout = () => {
    dispatch(onLogout());
    router.replace("/signup");
  };

  const moveToDashboard = () => {
    router.push("/admin");
  };

  const getInitials = (name: any) => {
    const splitName = name.split(" ");
    let initials = "";
    splitName.forEach((name: any) => {
      initials += name.charAt(0);
    });
    return initials.slice(0, 2);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="flex font-bold items-center justify-center h-12 w-12 text-md font-sans text-black bg-blue-100 rounded-full hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {user?.user?.profilePhotoUrl ? (
              <Image
                src={BACKEND_URL + user?.user?.profilePhotoUrl}
                alt="profile image"
                className="rounded-full object-cover h-full w-full"
                width={80}
                height={80}
              />
            ) : (
              getInitials(username)
            )}
          </Menu.Button>

          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                {user.role === "user" && (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() =>
                          router.push(`/influencer/${user.user?._id}`)
                        }
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        View Profile
                      </button>
                    )}
                  </Menu.Item>
                )}
                {user.role === "admin" && (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={moveToDashboard}
                        className={`${
                          active ? "bg-black text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        View Dashboard
                      </button>
                    )}
                  </Menu.Item>
                )}

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`${
                        active ? "bg-black text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
