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
    name: {
        type: String,
        maxlength: 50,
        required: true,
        default: "my name"
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
    comments: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Post"
        }],
        required: true,
    },
    followers: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Profile"
        }],
        required: true,
    },
    following: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Profile"
        }],
        required: true,
    },
    likes: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
    dislikes: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
    notifications: {
        type: [Schema.Types.ObjectId],
        required: true,
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
},
{timestamps: true}
);

const Profile =  models.Profile || model("Profile",profileSchema);
export default Profile