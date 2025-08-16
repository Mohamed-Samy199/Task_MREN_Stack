import mongoose, { Schema, Types } from "mongoose";


const announcementSchema = new Schema({
    title: { type: String, required: true, trim: true, minLength: 2, maxLength: 60},
    description: { type: String, required: true },
    createdBy: { type: Types.ObjectId, ref: "User", required: true },
    updatedBy: { type: Types.ObjectId, ref: "User" },
    deletedBy: { type: Types.ObjectId, ref: "User" },

}, {
    timestamps: true
});

const announcementModel = mongoose.models.Announcement || mongoose.model("Announcement", announcementSchema);
export default announcementModel;
