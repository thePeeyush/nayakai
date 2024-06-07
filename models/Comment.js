import {model,Schema,models} from "mongoose";

const commentSchema = new Schema({
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
    postID: {
        type: String,
        required: true
    }
});

const Comment =  models.Comment || model("Comment",commentSchema);
export default Comment