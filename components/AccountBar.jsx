import React from 'react'
import { auth } from '@/auth'
import SignIn from './SignInBtn'
import { signOut } from '@/auth'
import Link from 'next/link'
import ProfilePicture from './ProfilePicture'

const AccountBar = async () => {
  const session = await auth()
  if (session?.user !== undefined) {
    return (
      <div className="flex flex-row justify-between items-center gap-3 p-3">
          <Link href={'/profile'}><ProfilePicture/></Link>
      </div>
    )
  }
  return <SignIn />
}

export default AccountBar

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className='hidden md:block'>Sign Out</button>
    </form>
  )

}