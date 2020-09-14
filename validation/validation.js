const joi = require('joi');

module.exports.registerValidation= registerValidation=(data)=>{

    const registerationSchema = joi.object({

        name: joi.string()
            .min(3)
            .max(30)
            .required(),
    
        email: joi.string()
            .max(255)
            .email()
            .required(),
    
        password: joi.string()
            .min(8)
            .max(1024)
            .required(),
    
    });

   return registerationSchema.validate(data)    

}

module.exports.loginValidation= loginValidation=(data)=>{

    const loginSchema = joi.object({
    
        email: joi.string()
            .max(255)
            .email()
            .required(),
    
        password: joi.string()
            .min(8)
            .max(1024)
            .required(),
    
    });

   return loginSchema.validate(data)    

}