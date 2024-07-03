import React from "react";
import getUrl from "../../utils/getUrl";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../auth";
import ProfileBar from "../../components/ProfileBar";
import ProfileSettingModal from "../../components/ProfileSettingModal";
import PostCard from "../../components/PostCard";
import Link from "next/link";
import FollowBtn from "../../components/FollowBtn";
import FetchProfile from "../../components/fetchProfile";

const ProfilePage = async ({ searchParams }) => {
  const session = await auth();
  async function getProfile(searchParams) {
    const url = new URL(getUrl() + "/api/profile");
    const profileID = searchParams.id;
    if (profileID) {
      url.searchParams.append("profileID", profileID);
    } else {
      if (!session) {
        redirect("/api/auth/signin");
      }
      const userID = session.user.id;
      url.searchParams.append("userID", userID);
    }
    const res = await fetch(url, { method: "GET", cache: "no-store" });
    if (!res.ok) {
      redirect("/profile/create");
    }
    const result = (await res.json()).result;
    return result;
  }

  const profile = await getProfile(searchParams);

  if (!profile) {
    redirect("/profile/create");
  }

  return (
    <div className="w-full overflow-y-auto lg:-ml-36 gap-4 overflow-hidden py-20 lg:py-28">
      <div className="flex flex-wrap items-center max-w-xl mx-auto md:border border-base-200 rounded-2xl  overflow-hidden w-full h-auto">
        
        <div className="w-full relative overflow-hidden">
        <FetchProfile />
        <Image
          src={profile.profilePic}
          alt="profile"
          width={200}
          height={200}
          className=" absolute top-0 left-0 w-full h-full"
        />
          <div className="flex flex-wrap gap-4 items-center w-full min-h-48 mt-auto p-4 backdrop-blur-3xl">
            <div className="avatar h-32 w-32">
              <Image
                src={profile.profilePic}
                alt="profile"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
              <h1 className="text-5xl md:text-7xl text-white drop-shadow-md shadow-black font-semibold text">{profile?.name}</h1>
            <div className="z-10 flex flex-wrap gap-4  md:text-md mt-8">
              <h2 className="p-2 px-4 bg-gray-200 bg-opacity-40 text-black w-fit rounded-3xl">@{profile?.userName}</h2>
              <div className="flex items-center gap-4  p-2 px-4 bg-gray-200 bg-opacity-40 text-black w-fit rounded-3xl"> 
                <p>{profile?.followers.length} followers</p>
                <p>{profile?.following.length} following</p>
              </div>
              <p className=" p-2 px-4 bg-gray-200 bg-opacity-40 text-black w-fit rounded-3xl">{profile?.bio}</p>
            </div>
            <div className="z-10 grow">

              {profile?.userID === session?.user.id ? <ProfileSettingModal /> : <FollowBtn profileID={profile?._id} />}
            </div>
          </div>

        </div>
        <ProfileBar profile={profile} />
        {
          profile.posts.map((post, index) => {
            return <PostCard key={index} post={post} />
          })
        }
      </div>
    </div>
  );
};

export default ProfilePage;
