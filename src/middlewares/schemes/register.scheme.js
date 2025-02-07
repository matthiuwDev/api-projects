import Joi from "joi";

//Register Scheme
export const register = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().optional(),
    rolId: Joi.string().required()
});