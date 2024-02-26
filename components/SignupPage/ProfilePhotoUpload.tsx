"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { BsPerson } from "react-icons/bs";

const ProfilePhotoUpload = ({ profile, setProfile }: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles: any) => {
      // Update state with the uploaded file
      setProfile(acceptedFiles[0]);
    },
  });

  return (
    <div className="mx-auto my-3">
      <section className="bg-extremelyDarkGray flex flex-col items-center justify-center text-center gap-4 w-56 h-56 rounded-full overflow-hidden">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex-1 w-full h-full flex flex-col items-center justify-center"
        >
          <input {...getInputProps()} />
          {profile ? (
            <img
              src={URL.createObjectURL(profile)}
              alt="Uploaded Cover Photo"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <BsPerson className="text-5xl text-mediumGray mx-auto" />
          )}
        </div>
      </section>
      <h1 className="mt-4 text-lg text-center">Profile Image</h1>
    </div>
  );
};

export default ProfilePhotoUpload;
