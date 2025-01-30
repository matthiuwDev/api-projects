import { Router } from "express";
import taskController from "../../controllers/task.controller.js";
const router = Router();

router
    .get('/', taskController.getTasks)
    .post('/')
    .put('/:id')
    .delete('/:id')
    .get('/:id')

export default router;