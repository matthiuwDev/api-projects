import { Project } from "../models/Project.js";

class ProjectsService{

    getProjects = async() => {
        try {
            const projects = await Project.findAll();

            return projects;
        } catch (error) {
            
        }
    }

    createProject = async (newProject) => {
        try {
            const createdProject = await Project.create(newProject);
    
            return createdProject; 
        } catch (error) {
            throw new Error("Error al crear el proyecto: " + error.message);
        }
    }
}

export default new ProjectsService();
