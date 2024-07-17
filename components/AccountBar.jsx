import React from 'react'
import { auth } from '@/auth'
import SignIn from './SignInBtn'
import Link from 'next/link'
import ProfilePicture from './ProfilePicture'
import Theme from './Theme'
import { CiLogin } from "react-icons/ci";

const AccountBar = async () => {
  const session = await auth()
  if (session?.user !== undefined) {
    return (
      <div className="dropdown lg:dropdown-top dropdown-hover">
        <div tabIndex={0} role="button"><ProfilePicture /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow rounded-lg">
          <li className='bg-base-200 rounded-lg'><Link href={'/profile'}><CiLogin />Your Profile</Link></li>
          <Theme />
        </ul>
      </div>
    )
  }
  return <SignIn/>
}

export default AccountBar