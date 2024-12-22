import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postTitle: {
        type: "string",
        required: true,
    },
    postTdescription: {
        type: "string",
        required: true,
    },
    postAuthor: {
        type: "string",
        required: "true"
    },
    // 
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    // 
    commentBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    // 
    bookmarksBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
},
    {
        timestamps: true,
    }

)


export default mongoose.model("Post", postSchema)