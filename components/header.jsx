import NavBar from './NavBar';
import AccountBar from './AccountBar';
import PostBtn from './PostBtn';

export default function Header() {
  return (
    <header className=' fixed top-0 w-full lg:hidden flex flex-row justify-between items-center p-1 px-2 lg:border-b border-base-200 backdrop-blur-md z-30 min-h-16 '>
        <div className='w-1/4 '>
        <NavBar>
          <AccountBar/>
        </NavBar>
        </div>
        <div className=' flex flex-row w-1/2 min-w-fit  lg:rounded-r-full items-center justify-center'>
          <h1 className='font-bold text-2xl'>NAYAK <span className='font-thin'>AI</span></h1>
        </div>
        <div className='w-1/4'>
          <div className="flex gap-2 items-center justify-end">
            <PostBtn/>
          </div>
        </div>
      </header>
  )
}
