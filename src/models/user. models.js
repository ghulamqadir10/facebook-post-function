import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
        unique: true,
    },
    userLikedPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    userCommentPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    userBookMarksPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
},
    {
        timestamps: true,
    }

)


export default mongoose.model("User", userSchema)