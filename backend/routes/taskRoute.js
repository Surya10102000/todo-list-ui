import express from "express";
import { addTask, getTask, removeTask, updateTask } from "../controllers/taskController.js";
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post('/addtask', requireAuth ,addTask) 
router.post("/updateTask",requireAuth, updateTask)
router.delete("/removeTask",requireAuth, removeTask)
router.get("/",requireAuth, getTask)

export default router;