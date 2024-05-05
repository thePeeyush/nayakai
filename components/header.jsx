import NavBar from './NavBar';
import Translatebtn from './Translatebtn';
import AccountBar from './AccountBar';

export default function Header() {
  return (
    <header className=' fixed top-0 w-full flex flex-row justify-between items-center p-1 px-4 lg:border-b border-gray-200 shadow-md bg-white lg:bg-opacity-40 shadow-white backdrop-blur-md z-30 '>
        <div className='w-1/4 '>
        <NavBar>
          <AccountBar/>
        </NavBar>
        </div>
        <div className=' flex flex-row w-1/2 min-w-fit  lg:rounded-r-full items-center justify-center'>
          <h1 className='font-bold text-2xl text-gray-950'>NAYAK <span className='font-thin'>AI</span></h1>
        </div>
        <div className='w-1/4'>
          <Translatebtn/>
        </div>
      </header>
  )
}
