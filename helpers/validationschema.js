import Joi from '@hapi/joi';

export const employeeSchema = Joi.object({
    name:Joi.string().alphanum().min(3).max(20).required(),
    email:Joi.string().email({
        minDomainSegments: 1,
        tlds:{ allow: ['com']}
    }).required(),
    password:Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    position:Joi.string().alphanum().min(3).max(20).required(),
    phoneNumber: Joi.number().min(3).required(),
    status: Joi.string().required(),
    national_id: Joi.number().required(), 
    dateOfBirth: Joi.date().required(), 

});


export const loginSchema = Joi.object({
    email:Joi.string().email({
        minDomainSegments: 1,
        tlds:{ allow: ['com']}
    }).required(),
    password:Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
});


