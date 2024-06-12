import React from 'react'
import getUrl from '../../utils/getUrl';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { auth } from '../../auth';
import ProfileBar from '../../components/ProfileBar';

const ProfilePage = async ({ searchParams }) => {

  const session = await auth();
  if (!session) {
    redirect('/api/auth/signin');
  }
  async function getProfile(searchParams) {
    const userID = searchParams?.id || session.user.id;
    const url = new URL(getUrl() + '/api/profile');
    url.searchParams.append('id', userID);
    const res = await fetch(url, { method: 'GET', cache: "no-store" });
    if (!res.ok) {
      redirect('/profile/create');
    }
    const result = (await res.json()).result;
    return result;
  }

  const profile = await getProfile(searchParams);
  
  if(!profile){
    redirect('/profile/create');
  }

  return (
    <div className='mt-16 w-full absolute md:p-4'>
      <div className='flex flex-wrap justify-cente items-center gap-4 p-4 w-full max-w-xl mx-auto md:border rounded-lg'>
        <div className='avatar'>
          <Image src={profile.profilePic} alt="profile" width={200} height={200} className='rounded-lg' />
        </div>
        <div className="">
        <h1 className='text-lg font-semibold'>{profile?.name}</h1>
        <h2 className='text-sm text-gray-500'>@{profile?.userName}</h2>
        <p className=''>{profile?.bio}</p>
        </div>
        <ProfileBar profile={profile} />
      </div>
    </div>
  )

}

export default ProfilePage

