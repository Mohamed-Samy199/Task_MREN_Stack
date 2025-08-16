import joi from "joi";

export const generalFields = {
    email: joi.string().email().required(),
    id: joi.string().min(24).max(24).required(),
}


export const validation = (schema) => {
    return (req, res, next) => {
        const inputData = { ...req.body, ...req.params, ...req.query };
        if (req.file || req.files) {
            inputData.file = req.file || feq.files
        }
        const validationResult = schema.validate(inputData, { abortEarly: true });
        if (validationResult.error) {
            return res.status(400).json({ message: "Validation Error", validationError: validationResult.error?.details });
        }
        next();
    }
}