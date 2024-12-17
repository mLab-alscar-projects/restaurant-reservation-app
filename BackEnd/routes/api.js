import express  from "express";
import { getProfile, loginUser,registerUser,updateProfile } from "../controllers.js/userController.js";
import protect from "../Middleware/protect.js";
import getUsers from "../controllers.js/getUsers.js";

const router = express.Router()


router.post("/user/login", loginUser);

router.post("/user/register", registerUser)

router.put("/update-profile",  protect, updateProfile)

router.get("/get-profile", protect, getProfile)

router.get("/users", getUsers)



export default router
