import mongoose, { Schema, Types } from "mongoose";

const questionSchema = new Schema({
    text: { type: String, required: true },
    options: [
        {
            answer: { type: String, default: null },
            isCorrect: Boolean
        }
    ],
    points: { type: Number, default: 0 }
})
const quizSchema = new Schema({
    title: { type: String, tirm: true, required: true },
    description: String,
    duration: Number,
    date : String,
    semester: String,
    questionText: [questionSchema],
    createdBy :  { type: Types.ObjectId, ref: "User", required: true },
    updatedBy: { type: Types.ObjectId, ref: "User" },
    
}, {
    timestamps: true
});

const quizModel = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
export default quizModel;