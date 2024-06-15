import Image from 'next/image'
import React from 'react'
import { auth } from '@/auth'
import SignIn from './SignInBtn'
import { signOut } from '@/auth'
import Link from 'next/link'

const AccountBar = async () => {
  const session = await auth()
  if (session?.user !== undefined) {
    return (
      <div className="flex flex-row justify-between items-center gap-3 p-3">
        <div className="flex flex-row items-center gap-4 w-full">
          <Link href={'/profile'}><Image src={session.user.image} width={100} height={100} className='bg-gray-800 min-w-8 w-8 h-8 rounded-full tooltip' alt='profile picture' /></Link>
          <h1 className='hidden md:block text-ellipsis overflow-clip text-nowrap ' >{session.user.name}</h1>
        </div>
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