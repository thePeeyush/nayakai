'use client'
import { useOurStore } from "@/store/states";
import Link from "next/link";
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
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>English</Link></li>
                {/* <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>Hindi</Link></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>Punjabi</Link></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>Sanskrit</Link></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>Tamil</Link></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>Marathi</Link></li>
                <li onClick={(e)=>{changeLanguage(e.target.innerText)}} className=''><Link>Gujrati</Link></li> */}
            </ul>
        </div>
    )
}

export default Translatebtn


