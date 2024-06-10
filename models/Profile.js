import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userName: {
        type: String,
        maxlength: 50,
        required: true,
        unique : true,
    },
    bio: {
        type: String,
        maxlength: 250,
        required: true,
        default: "my bio"
    },
    profilePic: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/dqm3jessx/image/upload/v1717909608/rwoc4fvxe0ik2eqce1ed.png"
    },
    posts: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Post"
        }],
        required: true,
    },
    followers: [Schema.Types.ObjectId],
    following: [Schema.Types.ObjectId],
    likes: [Schema.Types.ObjectId],
    dislikes: [Schema.Types.ObjectId],
    comments: [Schema.Types.ObjectId],
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    specific_role: {
        type: {
            role: {
                type: String,
                enum: ["Admin", "Organisation", "Member", "Lawyer"],
                required: true
            },
            id: {
                type: Schema.Types.ObjectId,
                required: true
            }
        },
        default: null
    },
});

const Profile =  models.Profile || model("Profile",profileSchema);
export default Profile