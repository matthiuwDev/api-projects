import authService from "../services/auth.service.js";

class AuthController{
    userRegister = async (req, res, next) => {
        try {
            const { name, email, password, rolId } = req.body;
    
            const createdUser = await authService.createUser({ name, email, password, rolId });
    
            res.status(201).json({ status: "CREATED", data: createdUser });
    
        } catch (error) {
            //Captura errores lanzados desde el servicio y los envía al middleware de manejo de errores
            next(error);
        }
    };
    

    userLogin = async (req, res, next) => {   
        try {
            const { email, password } = req.body;

            const user = await authService.loginUser({ email, password });

            res.status(200).json({ status: "OK", data: user })
        } catch (error) {
            next(error)
        }
    }

}

export default new AuthController();