"use client";
import Link from "next/link";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";

const ProfileSettingModal = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="-mt-7">
          <IoSettingsOutline />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href={"/profile/create"}>Edit Profile</Link>
          </li>
          <li>
            <button
              onClick={() => {
                signOut();
              }}
              className="text-red-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileSettingModal;
