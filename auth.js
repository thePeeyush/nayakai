import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import clientPromise from './app/lib/mongodb'
import { redirect } from "next/dist/server/api-utils"
import { getURL } from "next/dist/shared/lib/utils"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: '/auth',
    },
    events: {
        async signIn({isNewUser}) {
            if(isNewUser) {
                redirect(`${getURL()}/profile/create`)
            }
            else {
                redirect(`${getURL()}/`)
            }
        },
    }
    })