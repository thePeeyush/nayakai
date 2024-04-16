import Image from "next/image";
import { BsRobot } from "react-icons/bs";

export default function MessageRight({text}) {
  return (
    // <div className='flex justify-end p-2'>
    // <div className="p-3 bg-yellow-500 bg-opacity-25 shadow-md rounded-md text-yellow-700 max-w-2xl ml-16 ease-in">{text}</div>
    // </div>
    <div className='flex justify-start p-2 '>
      <Image src="/logo.png" width={100} height={100} className='bg-gray-800 w-8 h-8 rounded-full' alt='profile picture'/>
      <div className=" px-2 py-1 text-yellow-700 bg-yellow-200 bg-opacity-25 ml-4 rounded-md">
        {text}
      </div>
      </div>
  )
}
