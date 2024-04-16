'use client'
import { useOurStore } from '@/state-store/Store';
import { BsTranslate, BsChevronDown } from 'react-icons/bs';


const Translatebtn = () => {
    const language = useOurStore((state)=>state.language);
    const changeLanguage = useOurStore((state)=>state.changeLanguage);
    return (
        <div className="dropdown dropdown-bottom dropdown-end float-right md:px-4">
            <div tabIndex={0} className="btn flex flex-row gap-2 items-center justify-end bg-transparent hover:bg-transparent shadow-none border border-gray-200 rounded-full px-3 ">
                <BsTranslate className='cursor-pointer text-2xl text-gray-950 inline-block w-fit' />
                <h2 className=' hidden md:block w-fit'>{language}</h2>
                <BsChevronDown className=' hidden md:block w-fit' />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>English</a></li>
                {/* <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>Hindi</a></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>Punjabi</a></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>Sanskrit</a></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>Tamil</a></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>Marathi</a></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><a>Gujrati</a></li> */}
            </ul>
        </div>
    )
}

export default Translatebtn


