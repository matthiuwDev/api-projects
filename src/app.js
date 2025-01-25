//Configuración de Express
import express from 'express'
import v1ProjectsRouter from './v1/routes/projects.routes.js';

import { errorHandler } from './middlewares/errorHandler.middleware.js';

const app = express();

//Middlewares
app.use(express.json())
app.use(errorHandler);

//Rutas
app.use("/api/v1/projects", v1ProjectsRouter)


export default app;