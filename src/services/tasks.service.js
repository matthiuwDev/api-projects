import { Task } from "../models/Task.js";

class TaskService{
    getTask = async () => {
        try {
            const tasks = await Task.findAll();

            return tasks;
        } catch (error) {
            throw new Error("Error al obtener las tareas: " + error.message);
        }
    }
}

export default new TaskService(); 