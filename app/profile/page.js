import React from 'react'
import getUrl from '../../utils/getUrl';
import Image from 'next/image';

const ProfilePage = async ({ searchParams }) => {
  async function getProfile(searchParams) {

    const curUrl = getUrl();
    let url = '';
    if (searchParams.pid) {
      url = `${curUrl}/api/profile?pid=${searchParams.pid}`
    } else url = `${curUrl}/api/profile`

    const res = await fetch(url, {
      method: 'GET',
      cache: "no-store"
    });
    return res.json();
  }

  const profile = await getProfile(searchParams);

  if (profile.message === 'Error') {
    return <h1 className="mt-20 ml-40">! Failed to fetch data</h1>
  }
  if (profile.message === 'Unauthorized') {
    return <h1 className="mt-20 ml-40">! Unauthorized</h1>
  }
  const { userName, profilePic } = profile.result;
  console.log(userName, profilePic);
  return (
    <main className='pt-20 lg:pt-16 sm:p-4 flex flex-col items-center w-full lg:w-auto'>
      <div className="flex flex-col justify-center items-center">
      <Image src={profilePic} width={100} height={100} className='bg-gray-800 min-w-8 w-8 rounded-full tooltip' alt='profile picture' />
        <h1 className='text-3xl'>{userName}</h1>
      </div>
    </main>
  )
}

export default ProfilePage