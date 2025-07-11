// Routes for expense-related API endpoints
import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
