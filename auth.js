import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import clientPromise from './app/lib/mongodb'
import getUrl from './utils/getUrl'
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    adapter: MongoDBAdapter(clientPromise),
    callbacks:{
        async signIn({user}){
            const url = getUrl() + '/api/profile'
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            return res.ok;
        }
    }
})