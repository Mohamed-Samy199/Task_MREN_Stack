import { Router } from "express";
import { asyncHandler } from "../../utils/response/asyncHandler.js";
import { registerAndLogin } from "./auth.controller.js";
import { validation } from "../../Middelware/validation.js";
import {  registerValidation } from "./auth.validation.js";


const authRouter = Router();

authRouter.post("/login" , validation(registerValidation), asyncHandler(registerAndLogin));


export default authRouter;