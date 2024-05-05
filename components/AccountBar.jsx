import Image from 'next/image'
import React from 'react'
import { auth } from '@/auth'
import SignIn from './SignInBtn'
import { signOut } from '@/auth'

const AccountBar = async () => {
  const session = await auth()
  if (session?.user !== undefined) {
    return (
      <div className="hidden md:flex flex-row justify-between items-center gap-3 p-3">
        <div className="flex flex-row items-center gap-4 w-full">
          <div className="tooltip tooltip-right" data-tip={session.user.name}>
          <Image src={session.user.image} width={100} height={100} className='bg-gray-800 w-8 rounded-full tooltip' data-tip="hello" alt='profile picture' />
          </div>
          <SignOut />
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
      <button type="submit">Sign Out</button>
    </form>
  )

}