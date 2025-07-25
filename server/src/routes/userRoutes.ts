// Routes for user-related API endpoints
import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);

export default router;
