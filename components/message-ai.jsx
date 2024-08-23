import { BiVolumeFull } from 'react-icons/bi';
import { TextGenerateEffect } from './generateText';
import { HiSparkles } from "react-icons/hi2";
import { MdOutlinePauseCircle, MdContentCopy, MdOutlineDone } from "react-icons/md";
import { useState } from 'react';

export default function MessageAi({ text, sources }) {

  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleSpeaker = (text) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel()
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices()[3];
    setPlaying(!playing);
    window.speechSynthesis.speak(utterance);
    utterance.onend = () => setPlaying(false);
  }

  const handlePauseSpeaker = () => {
    window.speechSynthesis.pause();
    setPlaying(!playing);
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className='flex w-11/12'>
      <HiSparkles className='text-3xl min-w-7 text-blue-500' />
      <div className=" py-1 px-4 w-full max-w-fit">
        <TextGenerateEffect words={text} />
        <div className="flex flex-wrap gap-2 text-md pt-3">
          <p onClick={handleCopyText} className={`cursor-pointer opacity-50 hover:opacity-100`}>{copied ? <MdOutlineDone /> : <MdContentCopy />}</p>
          <div className="cursor-pointer opacity-50 hover:opacity-100">{playing ? <MdOutlinePauseCircle onClick={handlePauseSpeaker} /> : <BiVolumeFull onClick={() => handleSpeaker(text)} />}</div>
          {sources && <p className="cursor-pointer opacity-50 text-sm -translate-y-[3px]">sources:</p>}
          {sources?.map((source, index) => {
              if (index > 3) return;
              const url = new URL(source.url);
              const host = url.hostname;
              return <a key={index} className="text-xs -translate-y-1 text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-8 cursor-pointer p-1 border border-base-300 rounded-md" href={source.url} target="_blank" rel="noreferrer">{host}</a>
            })}
        </div>
      </div>
    </div>
  )
}
