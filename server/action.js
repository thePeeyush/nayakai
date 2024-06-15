'use server'
import connectDB from '../utils/db'
import Post from '../models/Post'
import Profile from '../models/Profile'
import {auth} from '../auth'
import { redirect } from 'next/navigation';
import getUrl from '../utils/getUrl';

export async function checkAuth() {
    const session = await auth();
    if (!session) {
        redirect(`${getUrl()}/api/auth/signin`);
    }
}

export async function likePost (postID) {
        await checkAuth();
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
        await checkAuth();
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
        await checkAuth();
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
        await checkAuth();
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