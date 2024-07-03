import { BiVolumeFull } from 'react-icons/bi';
import { TextGenerateEffect } from './generateText';
import { HiOutlineSparkles } from "react-icons/hi2";

export default function MessageAi({ text }) {
  const handleSpeaker = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
  return (
    <div className='flex p-2 w-11/12'>
      <HiOutlineSparkles className='text-3xl min-w-7' />
      <div className=" py-1 px-4">
        <TextGenerateEffect words={text} />
      </div>
      <div className="px-1 py-2 cursor-pointer opacity-50 hover:opacity-100"><BiVolumeFull onClick={() => handleSpeaker(text)} /></div>
    </div>
  )
}
