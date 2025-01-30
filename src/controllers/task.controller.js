import tasksService from "../services/tasks.service.js";

class TaskController{
    getTasks = async (req, res, next) => {
        try {
            const tasks = await tasksService.getTask();

            res.send({ status: 'OK', data: tasks });
        } catch (error) {
            next(error)
        }
    }

    createTask = async (req,res, next) => {
        
    }
}

export default new TaskController();