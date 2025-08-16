import { Router } from "express";
import { auth } from "../../Middelware/authuntication.js";
import { endPoint } from "../../utils/autharization.js";
import { asyncHandler } from "../../utils/response/asyncHandler.js";
import { createQuiz, deleteQuiz, getQuiz, updateQuiz } from "./quiz.controller.js";


const quizRouter = Router();

quizRouter.get("/" , asyncHandler(getQuiz));
quizRouter.post("/" , auth(endPoint.user) , asyncHandler(createQuiz));
quizRouter.put("/:quizId" , auth(endPoint.user) , asyncHandler(updateQuiz));
quizRouter.delete("/:quizId" , auth(endPoint.user) , asyncHandler(deleteQuiz));


export default quizRouter;