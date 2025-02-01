import { Router } from "express";
import taskController from "../../controllers/task.controller.js";
const router = Router();

router
    .get('/', taskController.getTasks)
    .post('/', taskController.createTask)
    .put('/:id',taskController.updateTask)
    .delete('/:id', taskController.deleteTask)
    .get('/:id', taskController.getOneTask)

export default router;