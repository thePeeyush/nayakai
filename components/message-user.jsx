import Image from "next/image";
import { useOurStore } from "../store/states";

export default function MessageUser({ text, imageURL }) {
  const userProfile = useOurStore((state) => state.userProfile);
  const profilePic = userProfile?.profilePic;
  return (
    <div className='flex gap-2 p-2 justify-end ml-auto w-11/12'>
      <div className="flex flex-col items-end">
      <div className=" px-2 py-1 text-neutral-content bg-neutral rounded-md flex flex-col">
        {text}
      </div>
      {imageURL && <Image src={imageURL} width={100} height={100} className="rounded-xl my-2 lg:mnbggw-72 h-auto" alt='attached image' />}
      </div>
      <div className="avatar min-w-8 min-h-8 w-8 h-8 rounded-full overflow-hidden">
        <Image src={profilePic || "/logo.png"} width={100} height={100} className='bg-gray-800' alt='profile picture' />
      </div>
    </div>
  )
}
