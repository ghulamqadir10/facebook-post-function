import { createUser, commentPost, allUsers } from "../controllers/user.controllers.js";
import express from "express"

const router = express.Router()

// router.get("/posts", allPost)
router.post("/createUser", createUser)
router.post("/userComment", commentPost)
router.post("/users", allUsers)

export default router;