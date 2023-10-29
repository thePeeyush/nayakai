import { BiVolumeFull } from 'react-icons/bi';

export default function MessageLeft({text}) {
    return (
      <div className='flex justify-start items-end p-2 relative'>
      <div className="p-3 bg-white text-gray-950  rounded-md shadow-md max-w-4xl">
        {text}
      </div>
      <div className="px-1 py-3 mr-16 text-gray-400 hover:text-gray-800 cursor-pointer"><BiVolumeFull/></div>
      </div>
    )
  }
  