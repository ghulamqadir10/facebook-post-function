import mongoose from "mongoose";
import postModels from "../models/post.models.js";
import userModels from "../models/user. models.js";

// create a new user 
const createUser = async (req, res) => {
    try {

        const { fullName, email, userLikedPost } = req.body;

        // validation
        if (!fullName || !email) {
            res.status(400).json({
                success: false,
                message: "fullname and email is required"
            })
        }

        const userPost = await userModels.create({
            fullName,
            email,
            userLikedPost
        })

        // update likedby in the refrence post 
        if (userLikedPost) {
            await postModels.findByIdAndUpdate(userLikedPost, {
                $push: { likedBy: userPost._id }
            },
                { new: true }
            )

        }
        res.status(201).json({
            success: true,
            data: userPost,
            message: "user created successfully"
        })


    } catch (error) {
        res.status(500).json({
            message: "error occur while crating a user",
            error: error.message,
        })
    }
}



// comment function
const commentPost = async (req, res) => {
    try {

        const { fullName, email, userCommentPost } = req.body;

        // validation
        if (!fullName || !email) {
            res.status(400).json({
                success: false,
                message: "fullname and email is required"
            })
        }

        const userComment = await userModels.create({
            fullName,
            email,
            userCommentPost
        })

        // update likedby in the refrence post 
        if (userCommentPost) {
            await postModels.findByIdAndUpdate(userCommentPost, {
                $push: { commentBy: userComment._id }
            },
                { new: true }
            )

        }
        res.status(201).json({
            success: true,
            data: userComment,
            message: "user commented successfully"
        })


    } catch (error) {
        res.status(500).json({
            message: "error occur while comment on a post",
            error: error.message,
        })
    }
}



// get all users
const allUsers = async (req, res) => {
    try {

        const users = await postModels.find({})
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while getting the users",
            error: error.message
        })
    }
}





export { createUser, commentPost, allUsers }