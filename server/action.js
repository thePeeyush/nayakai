'use server'
import connectDB from '../utils/db'

export async function likePost (postID) {
    try {
        const db = await connectDB();
        const result = await db.collection('posts').updateOne({ _id: postID }, { $inc: { likes: 1 } })
        console.log('result', result);
        return true
    } catch (error) {
        console.log('ERROR while increment the upvote',error);
        return false
    }
}

export async function unlikePost (postID) {
    try {
        const db = await connectDB();
        const result = await db.collection('posts').updateOne({ _id: postID }, { $inc: { likes: -1 } })
        console.log('result', result);
        return true
    } catch (error) {
        console.log('ERROR while decrement the upvote',error);
        return false
    }
}

export async function dislikePost (postID) {
    try {
        const db = await connectDB();
        const result = await db.collection('posts').updateOne({ _id: postID }, { $inc: { dislikes: 1 } })
        console.log('result', result);
        return true
    } catch (error) {
        console.log('ERROR while increment the downvote',error);
        return false
    }
}

export async function undislikePost (postID) {
    try {
        const db = await connectDB();
        const result = await db.collection('posts').updateOne({ _id: postID }, { $inc: { dislikes: -1 } })
        console.log('result', result);
        return true
    } catch (error) {
        console.log('ERROR while decrement the upvote',error);
        return false
    }
}