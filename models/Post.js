import {model,Schema,models} from "mongoose";
const postSchema = new Schema({
    postID : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default:Date.now,
    },
    media:{
        type: [{
            url: {
                type: String,
                required: true
            },
            filetype: {
                type: String,
                required: true
            }
        }],
        default: []
    },
    tags: {
        type: [String],
    },
    comments: { 
        type: [{
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }],
        required: true,
        default: []
    },
    likes: {    
        type: Number,
        required: true,
        default: 0
    },
    dislikes: {     
        type: Number,  
        required: true,
        default: 0
    },
    views: {     
        type: Number,
        required: true,
        default: 0
    }
});

const Post =  models.Post || model("Post",postSchema);
export default Post;