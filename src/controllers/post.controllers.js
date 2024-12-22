import Post from "../models/post.models.js";
import mongoose from "mongoose";

const addPost = (req, res) => {
    const { title, description } = req.body
    if (!title) {
        res.status(404).json({
            message: "title is required"
        })
        return
    }
    if (!description) {
        res.status(404).json({
            message: "description is required"
        })
        return
    }

    Post.create({
        title,
        description
    })
    res.status(201).json({
        message: "added to database successfully"
    })

}

// all posts
const allPost = async (req, res) => {
    const posts = await Post.find({})
        .populate("likedBy")
        .populate("commentBy")
        .populate("bookmarksBy")
    res.json(posts)
};


export { addPost, allPost };