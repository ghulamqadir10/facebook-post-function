import { addPost, allPost } from "../controllers/post.controllers.js";
import express from "express"

const router = express.Router()

router.get("/posts", allPost)
router.post("/addPost", addPost)

export default router;