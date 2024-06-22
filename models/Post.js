import { model, Schema, models } from "mongoose";
const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    media: {
        type: [
            {
                url: {
                    type: String,
                    required: true,
                },
                filetype: {
                    type: String,
                    required: true,
                },
            },
        ],
        default: [],
    },
    tags: {
        type: [String],
    },
    comments: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
        required: true,
        default: [],
    },
    likes: {
        type: Number,
        required: true,
        default: 0,
    },
    dislikes: {
        type: Number,
        required: true,
        default: 0,
    },
    views: {
        type: Number,
        required: true,
        default: 0,
    },
    level : {
        type: Number,
        required: true,
        default:0,
    }
},
{timestamps: true}
);

const Post = models.Post || model("Post", postSchema);
export default Post;
