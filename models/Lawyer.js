import {model,Schema,models} from "mongoose";

const lawyerSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
        default:Date.now,
    },
    phone: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    address: [{
        state: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }],
    rating: {
        type: Number,
        required: true
    }
});


const Lawyer =  models.Lawyer || model("Lawyer",lawyerSchema);
export default Lawyer;

