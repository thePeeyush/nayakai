import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import clientPromise from './app/lib/mongodb'
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    adapter: MongoDBAdapter(clientPromise),
})