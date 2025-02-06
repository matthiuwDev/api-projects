//Configuración de Express
import express from 'express'
import v1ProjectsRouter from './v1/routes/projects.routes.js';
import v1TaskRouter from './v1/routes/tasks.routes.js'

import { errorHandler } from './middlewares/errorHandler.middleware.js';

const app = express();

//Middlewares
app.use(express.json())


//Rutas
app.use("/api/v1/projects", v1ProjectsRouter)
app.use("/api/v1/tasks", v1TaskRouter)

app.use(errorHandler);


export default app;