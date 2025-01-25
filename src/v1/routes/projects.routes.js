import { Router } from "express";
import projectsController from "../../controllers/projects.controller.js";
const router = Router();

router
    .get('/', projectsController.getProjects)
    .post('/', projectsController.createProject)
    .put('/:id')
    .delete('/:id')
    .get('/:id')

export default router;
