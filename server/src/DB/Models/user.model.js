import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    email: { type: String, required: true, lowercase: true },
    isConfirmed: { type: Boolean, default: false },
    role: { type: String, enum: ['User', 'Admin'], default: 'User' },
}, {
    timestamps: true,
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;