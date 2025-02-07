import { Router } from "express";
const router = Router();
import authController from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validateData.middleware.js";
import { register } from "../../middlewares/schemes/register.scheme.js";
import { login } from "../../middlewares/schemes/login.scheme.js";

router
    .post('/login', validate(login))
    .post('/register', validate(register))
    .post('/logout')
    .get('/protected')

export default router;