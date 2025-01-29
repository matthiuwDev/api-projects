import { Router } from "express";
import projectsController from "../../controllers/projects.controller.js";
const router = Router();

router
    .get('/', projectsController.getProjects)
    .post('/', projectsController.createProject)
    .put('/:id', projectsController.updateProject)
    .delete('/:id', projectsController.deleteProject)
    .get('/:id')

export default router;
