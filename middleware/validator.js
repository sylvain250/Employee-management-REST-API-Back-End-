import {employeeSchema,loginSchema} from '../helpers/validationschema';

export const validateEmployee = (req,res,next) =>{
    const {error}= employeeSchema.validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }else next();
    
}
export const validateLogin = (req,res,next) =>{
    const {error}= loginSchema.validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }else next();
    
}
export default {
    validateLogin,
    validateEmployee
}
