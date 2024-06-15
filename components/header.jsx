import NavBar from './NavBar';
import AccountBar from './AccountBar';
import Link from 'next/link';
import { IoCreateOutline } from "react-icons/io5";
import ModalForPost from './ModalForPost';

export default function Header() {
  return (
    <header className=' fixed top-0 w-full flex flex-row justify-between items-center p-1 px-4 lg:border-b border-gray-200 bg-white bg-opacity-40 backdrop-blur-md z-30 min-h-16'>
        <div className='w-1/4 '>
        <NavBar>
          <AccountBar/>
        </NavBar>
        </div>
        <div className=' flex flex-row w-1/2 min-w-fit  lg:rounded-r-full items-center justify-center'>
          <h1 className='font-bold text-2xl text-gray-950'>NAYAK <span className='font-thin'>AI</span></h1>
        </div>
        <div className='w-1/4'>
          <div className="flex gap-2 items-center justify-end pr-4">
            {/* <Link href="/post">
              <div className="flex">
              <IoCreateOutline className='text-2xl'/>
              <h1 className='hidden md:block pt-[2px]'>Post</h1>
              </div>
            </Link> */}
            <ModalForPost/>
          </div>
        </div>
      </header>
  )
}
