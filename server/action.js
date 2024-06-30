'use server'
import connectDB from '../utils/db'
import Post from '../models/Post'
import Profile from '../models/Profile'
import { redirect } from 'next/navigation';
import getUrl from '../utils/getUrl';
import { checkAuth } from '../utils/checkAuth';

//Post Actions:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;


export async function likePost(postID) {
    try {
        const user = await checkAuth();
        await connectDB();
        const userProfile = await Profile.findOne({ userID: user.id });
        if (!userProfile) redirect(`${getUrl()}/profile/create`);
        const isLike = userProfile.likes.includes(postID);
        const isDislike = userProfile.dislikes.includes(postID);

        if (isDislike){
            await Profile.updateOne({ userID: user.id }, { $pull: { dislikes: postID } });
            await Post.updateOne({ _id: postID }, { $pull: { dislikes: userProfile._id } });
        }
        if(isLike){
            await Profile.updateOne({ userID: user.id }, { $pull: { likes: postID } });
            await Post.updateOne({ _id: postID }, { $pull: { likes: userProfile._id } });
        } else {
            await Profile.updateOne({ userID: user.id }, { $push: { likes: postID } });
            await Post.updateOne({ _id: postID }, { $push: { likes: userProfile._id } });
        }
        return true
    } catch (error) {
        console.log('ERROR during upvote', error);
        return false
    }
}

export async function dislikePost(postID) {
    try {
        const user = await checkAuth();
        await connectDB();
        const userProfile = await Profile.findOne({ userID: user.id });
        if (!userProfile) redirect(`${getUrl()}/profile/create`);
        const isLike = userProfile.likes.includes(postID);
        const isDislike = userProfile.dislikes.includes(postID);

        if (isLike){
            await Profile.updateOne({ userID: user.id }, { $pull: { likes: postID } });
            await Post.updateOne({ _id: postID }, { $pull: { likes: userProfile._id } });
        }
        if(isDislike){
            await Profile.updateOne({ userID: user.id }, { $pull: { dislikes: postID } });
            await Post.updateOne({ _id: postID }, { $pull: { dislikes: userProfile._id } });
        } else {
            await Profile.updateOne({ userID: user.id }, { $push: { dislikes: postID } });
            await Post.updateOne({ _id: postID }, { $push: { dislikes: userProfile._id } });
        }
        return true
    } catch (error) {
        console.log('ERROR during upvote', error);
        return false
    }
}

export async function deletePost (postID) {
    try {
        const user = await checkAuth();
        await connectDB();
        await Profile.updateOne({ userID: user.id }, { $pull: { posts: postID } });
        await Post.deleteOne({ _id: postID });
        return true
    } catch (error) {
        console.log('ERROR deleting post', error);
        return false
    }
}

//Profile Actions:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;

export async function followProfile(profileID) {
    try {
        const user = await checkAuth();
        await connectDB();
        const userProfile = await Profile.findOne({ userID: user.id });
        if (!userProfile) redirect(`${getUrl()}/profile/create`);
        
        if(userProfile.following.includes(profileID)){
            await userProfile.updateOne({ $pull: { following: profileID } });
            await Profile.updateOne({ _id: profileID }, { $pull: { followers: userProfile._id } });
        } else {
        await userProfile.updateOne({ $push: { following: profileID } });
        await Profile.updateOne({ _id: profileID }, { $push: { followers: userProfile._id } });
        }
        return true
    } catch (error) {
        console.log('ERROR while follow the profile', error);
        return false
    }
}

