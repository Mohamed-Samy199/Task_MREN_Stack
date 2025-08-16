import quizModel from "../../DB/Models/quiz.model.js";
import { successResponse } from "../../utils/response/successResponse.js";

// Get All Quizzes
export const getQuiz = async (req, res) => {

    const quizzes = await quizModel.find({}).populate([
        {
            path : "createdBy",
        }
    ])
    return successResponse({ res, data: { quizzes } });
};
// Create quiz
export const createQuiz = async (req, res, next) => {
    const { title, description, questionText, semester , date } = req.body;

    if (!Array.isArray(questionText)) {
        return next(new Error("in-valid questions data", { cause: 400 }))
    }
    const questions = questionText.map((question) => {
        const { text, options = [], points } = question;
        const optionsFormat = Array.isArray(options) ?
            options.map((option) => {
                const { answer, isCorrect } = option;
                return { answer, isCorrect };
            })
            :
            [];
        return { text, options: optionsFormat, points };
    });

    const quiz = await quizModel.create({ title, description, questionText: questions, createdBy: req.user._id , semester , date });
    return successResponse({ res, status: 201, data: { quiz } });
};
// Update quiz
export const updateQuiz = async (req, res, next) => {
    const { title, description, questionText , semester , date } = req.body;
    const { quizId } = req.params;

    if (!await quizModel.findById(quizId)) {
        return next(new Error("not found quiz", { cause: 404 }));
    }

    if (!Array.isArray(questionText)) {
        return next(new Error("in-valid questions data", { cause: 400 }))
    }
    const questions = questionText.map((question) => {
        const { text, options = [], points } = question;
        const optionsFormat = Array.isArray(options) ?
            options.map((option) => {
                const { answer, isCorrect } = option;
                return { answer, isCorrect };
            })
            :
            [];
        return { text, options: optionsFormat, points };
    });

    const quiz = await quizModel.findByIdAndUpdate(quizId, { title, description, questionText: questions, updatedBy: req.user._id , semester , date }, { new: true });
    if (!quiz) {
        return next(new Error("can't update", { cause: 400 }));
    }
    return successResponse({ res, data: { quiz } });
};
// Delete Quiz
export const deleteQuiz = async (req, res, next) => {
    const { quizId } = req.params;

    if (!await quizModel.findById(quizId)) {
        return next(new Error("not found quiz", { cause: 404 }));
    }


    const quiz = await quizModel.findByIdAndDelete(quizId);
    if (!quiz) {
        return next(new Error("can't delete", { cause: 400 }));
    }
    return successResponse({ res });
};
