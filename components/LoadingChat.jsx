import React from "react";

const LoadingChat = () => {
  return (
    <div className="flex justify-start items-end p-2">
      <div className="flex items-center p-3 bg-white text-gray-950  rounded-md shadow-md w-fit">
        <div className="w-4 h-4 bg-slate-700 animate-pulse rounded-full mx-1"></div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default LoadingChat;
