'use server'
import connectDB from '../utils/db'
import Post from '../models/Post'

export async function likePost (postID) {
    try {
        await connectDB();
        const result = await Post.updateOne({ _id: postID }, { $inc: { likes: 1 } })
        console.log('result', result);
        if(result.modifiedCount === 0) return false;
        return true
    } catch (error) {
        console.log('ERROR while increment the upvote',error);
        return false
    }
}

export async function unlikePost (postID) {
    try {
        await connectDB();
        const result = await Post.updateOne({ _id: postID }, { $inc: { likes: -1 } })
        console.log('result', result);
        if(result.modifiedCount === 0) return false;
        return true
    } catch (error) {
        console.log('ERROR while decrement the upvote',error);
        return false
    }
}

export async function dislikePost (postID) {
    try {
        await connectDB();
        const result = await Post.updateOne({ _id: postID }, { $inc: { dislikes: 1 } })
        console.log('result', result);
        if(result.modifiedCount === 0) return false;
        return true
    } catch (error) {
        console.log('ERROR while increment the downvote',error);
        return false
    }
}

export async function undislikePost (postID) {
    try {
        await connectDB();
        const result = Post.updateOne({ _id: postID }, { $inc: { dislikes: -1 } })
        console.log('result', result);
        if(result.modifiedCount === 0) return false;
        return true
    } catch (error) {
        console.log('ERROR while decrement the upvote',error);
        return false
    }
}