import React, { Suspense } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";


const LoadingChat = () => {
  return (
    <div className='flex justify-start p-2'>
      <HiOutlineSparkles className='text-3xl mr-2' />
      <div className="flex flex-col gap-4 w-full min-w-52 max-w-lg mt-3 ml-3">
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
  );
};

export default LoadingChat;
