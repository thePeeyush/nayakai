import React from 'react'
import { auth } from '../auth';
import { SessionProvider } from 'next-auth/react';

const SessionWrapper = async ({children}) => {
    const session = await auth();
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default SessionWrapper