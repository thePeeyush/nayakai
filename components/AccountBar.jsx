import React from 'react'
import { auth } from '@/auth'
import SignIn from './SignInBtn'
import { signOut } from '@/auth'
import Link from 'next/link'
import ProfilePicture from './ProfilePicture'
import Theme from './Theme'

const AccountBar = async () => {
  const session = await auth()
  if (session?.user !== undefined) {
    return (
      <div className="dropdown lg:dropdown-top dropdown-hover">
        <div tabIndex={0} role="button"><ProfilePicture /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link href={'/profile'}>Your Profile</Link></li>
          <li><Theme /></li>
        </ul>
      </div>
    )
  }
  return (
    <Link href={'/auth'} className='btn glass min-h-8 w-full rounded-full'>LogIn</Link>
  )
}

export default AccountBar