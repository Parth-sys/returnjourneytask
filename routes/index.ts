import express from "express";
import posts from "./posts";;


const router=express();
 router.use('/post',posts);

 export default router;