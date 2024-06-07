import connectDB from "./db"

export default async function getAuthor(authorID) {
    try {
        const db = await connectDB()
        const result = await db.collection('users').findOne({authorID: authorID})
        return result
    } catch (error) {
        console.log(error)
    }
}