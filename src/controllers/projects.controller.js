import projectsService from "../services/projects.service.js" 

class ProjectsController{
    getProjects = async (req, res, next) => {
        try {
            const projects = await projectsService.getProjects();

            res.send({ status: 'OK', data: projects })
        } catch (error) {
            next(error);
        }
    }
    
    createProject = async (req, res, next) => {
        try {
            const { body } = req;

            if (!body.name || !body.priority || !body.description) {
                return res.status(400).json({
                    status: "FAILED",
                    data: { error: "Faltan campos obligatorios" },
                });
            }

            const newProject = {
                name: body.name,
                priority: body.priority,
                description: body.description,
            };

            const createdProject = await projectsService.createProject(newProject);

            res.status(201).json({ status: "OK", data: createdProject });
        } catch (error) {
            next(error); // Ahora next está correctamente definido
        }
    };
    
}

export default new ProjectsController();