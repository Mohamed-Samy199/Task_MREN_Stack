import { generalFields } from "../../Middelware/validation.js";
import joi from "joi";


export const registerValidation = joi.object().keys({
    email : generalFields.email,
}).required();


