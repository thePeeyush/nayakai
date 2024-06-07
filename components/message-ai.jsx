import { BiVolumeFull } from 'react-icons/bi';
import { TextGenerateEffect } from './generateText';
import { HiOutlineSparkles } from "react-icons/hi2";

export default function MessageAi({text}) {
  const handleSpeaker = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
    return (
      <div className='flex justify-start p-2'>
        <HiOutlineSparkles className='text-3xl min-w-7'/>
      <div className=" py-1 px-4 text-gray-950 ">
        <TextGenerateEffect words={text}/>
      </div>
      <div className="px-1 py-2 text-gray-400 hover:text-gray-800 cursor-pointer"><BiVolumeFull onClick={()=>handleSpeaker(text)}/></div>
      </div>
    )
  }
  