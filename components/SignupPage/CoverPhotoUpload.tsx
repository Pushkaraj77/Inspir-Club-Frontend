"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { BsCameraFill } from "react-icons/bs";

const CoverPhotoUpload = ({ cover, setCover }: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles: any) => {
      // Update state with the uploaded file
      setCover(acceptedFiles[0]);
    },
  });

  return (
    <section className="bg-extremelyDarkGray rounded-lg flex flex-col items-center justify-center text-center gap-4 h-[300px]">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex-1 w-full h-full flex flex-col items-center justify-center p-6"
      >
        <input {...getInputProps()} />
        {cover ? (
          <img
            src={URL.createObjectURL(cover)}
            alt="Uploaded Cover Photo"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <>
            <BsCameraFill className="text-3xl text-mediumGray mx-auto" />
            <p className="text-lg font-medium my-2">Add Cover Photo</p>
            <p className="text-lightGray">We prefer to add your photo</p>
          </>
        )}
      </div>
    </section>
  );
};

export default CoverPhotoUpload;
