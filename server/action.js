'use server'
import connectDB from '../utils/db'
import Post from '../models/Post'
import Profile from '../models/Profile'
import { auth } from '../auth'
import { redirect } from 'next/navigation';
import getUrl from '../utils/getUrl';

export async function checkAuth() {
    const session = await auth();
    if (!session) {
        redirect(`${getUrl()}/api/auth/signin`);
    }
    return session.user
}

export async function likePost(postID) {
    try {
        const user = await checkAuth();
        await connectDB();
        const presentLike = await Profile.findOne({ userID: user.id, likes: postID })
        const presentDislike = await Profile.findOne({ userID: user.id, dislikes: postID })
        if (presentDislike) {
            const result = await Post.updateOne({ _id: postID }, { $inc: { dislikes: -1 } });
            const result2 = await presentDislike.updateOne({ $pull: { dislikes: postID } })
            if (result.modifiedCount === 0 && result2.modifiedCount === 0) return false;
        } else if (presentLike) {
            const result = await Post.updateOne({ _id: postID }, { $inc: { likes: -1 } });
            const result2 = await presentLike.updateOne({ $pull: { likes: postID } })
            if (result.modifiedCount === 0 && result2.modifiedCount === 0) return false;
            return true
        }
        const result = await Post.updateOne({ _id: postID }, { $inc: { likes: 1 } })
        const result2 = await Profile.updateOne({ userID: user.id }, { $push: { likes: postID } })
        if (result.modifiedCount === 0 && result2.modifiedCount === 0) return false;
        return true
    } catch (error) {
        console.log('ERROR while increment the upvote', error);
        return false
    }
}

export async function dislikePost(postID) {
    try {
        const user = await checkAuth();
        await connectDB();
        const presentLike = await Profile.findOne({ userID: user.id, likes: postID })
        const presentDislike = await Profile.findOne({ userID: user.id, dislikes: postID })
        if (presentLike) {
            const result = await Post.updateOne({ _id: postID }, { $inc: { likes: -1 } });
            const result2 = await presentLike.updateOne({ $pull: { likes: postID } })
            if (result.modifiedCount === 0 && result2.modifiedCount === 0) return false;
        } else if (presentDislike) {
            const result = await Post.updateOne({ _id: postID }, { $inc: { dislikes: -1 } });
            const result2 = await presentDislike.updateOne({ $pull: { dislikes: postID } })
            if (result.modifiedCount === 0 && result2.modifiedCount === 0) return false;
            return true
        }
        const result = await Post.updateOne({ _id: postID }, { $inc: { dislikes: 1 } })
        const result2 = await Profile.updateOne({ userID: user.id }, { $push: { dislikes: postID } })
        if (result.modifiedCount === 0 && result2.modifiedCount === 0) return false;
        return true
    } catch (error) {
        console.log('ERROR while increment the upvote', error);
        return false
    }
}

export async function fetchUserLikesAndDislikes() {
    try {
        const user = await checkAuth();
        await connectDB();
        const profile = await Profile.findOne({ userID: user.id }).select({ likes: 1, dislikes: 1 })
        console.log('profile', profile);
        if (!profile) {
            return null
        }
        return profile
    } catch (error) {
        console.log('ERROR WHILE FETCHING USER LIKES AND DISLIKES', error);
    }
}