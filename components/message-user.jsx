import Image from "next/image";
import { useOurStore } from "../store/states";

export default function MessageUser({text}) {
  const userProfile = useOurStore((state)=>state.userProfile);
  const profilePic = userProfile?.profilePic;
  return (
    <div className='flex gap-2 p-2 justify-end ml-auto w-11/12'>
      <div className=" px-2 py-1 text-neutral-content bg-neutral rounded-md">
        {text}
      </div>
      <Image src={ profilePic || "/logo.png" }width={100} height={100} className='bg-gray-800 w-8 h-8 rounded-full' alt='profile picture'/>
      </div>
  )
}
