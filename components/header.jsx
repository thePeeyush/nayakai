import Image from 'next/image'
import { BsTranslate,BsChevronDown } from 'react-icons/bs';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className=' fixed w-full flex flex-row justify-between items-center px-4 lg:border-b border-gray-300 shadow-xl bg-white shadow-white z-30 '>
        <div className='w-1/3'>
        <NavBar/>
        </div>
        <div className=' flex flex-row gap-2 w-1/3 min-w-fit  lg:rounded-r-full items-center justify-center'>
          <Image src="/logoLight.png" width={100} height={100} className='w-14 rounded-full'/>
          <h1 className='font-bold text-2xl text-gray-950'>NAYAK <span className='font-thin'>AI</span></h1>
        </div>
        <div className="flex flex-row gap-2 items-center justify-end w-1/3">
        <BsTranslate className='cursor-pointer text-2xl text-gray-950'/>
        <h2 className=' hidden md:block'>English</h2>
        <BsChevronDown className=' hidden md:block'/>
        </div>
      </header>
  )
}
