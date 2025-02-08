import tasksService from "../services/tasks.service.js";

class TaskController{
    getTasks = async (req, res, next) => {
        try {
            const tasks = await tasksService.getTasks();

            res.send({ status: 'OK', data: tasks });
        } catch (error) {
            next(error)
        }
    }

    getOneTask = async (req, res, next) => {
        const { id } = req.params;

        try {
            const task = await tasksService.getOneTask(id);

            res.send({ status: 'OK', data: task });
        } catch (error) {
            next(error);
        }
    }

    createTask = async (req,res, next) => {
        const { body } = req;
        try {
            const newTask = {
                name: body.name,
                done: body.done,
                projectId: body.projectId

            };

            const createdTask = await tasksService.createTask(newTask);

            res.status(201).json({ status: "CREATED", data: createdTask });

        } catch (error) {
            next(error)
        }
        
    }

    updateTask = async (req, res, next) => {
        try {
            const { body, params: { id } } = req;

            if (!id) {
                return res.status(400).json({ 
                    status: "FAILED", 
                    data: { error: "Parámetro ':id' no puede estar vacío " } 
                });
            }

            const updatedTask = await tasksService.updateTask(id, body);
            
            res.status(200).json({ status: "OK", data: updatedTask })
        } catch (error) {
            next(error);
        }
    }

    deleteTask = async (req, res, next) => {
        const { id } = req.params;

        try {
            tasksService.deleteTask(id);

            res.sendStatus(204);
        } catch (error) {
            next(error)
        }
    }
}

export default new TaskController();