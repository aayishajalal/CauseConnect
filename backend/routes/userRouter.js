import express from "express";
import { getUsersForSideBar, login, logout, signup } from "../controllers/userControllers.js";
import protectedRoute from "../middleware/protected.js";

const router = express.Router();

// All Routes for User

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",logout)
router.get("/",protectedRoute,getUsersForSideBar);


export default router;