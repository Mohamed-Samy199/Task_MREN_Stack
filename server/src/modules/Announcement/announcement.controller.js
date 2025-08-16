import announcementModel from "../../DB/Models/announcement.model.js"
import { successResponse } from "../../utils/response/successResponse.js";

// Get All Announcements
export const getAnnouncements = async (req, res) => {
    const announcements = await announcementModel.find({});
    return successResponse({ res, data: { announcements } });
};
// Create New Announcements
export const addAnnouncement = async (req, res, next) => {
    const { title, description } = req.body;

    const addAnnouncement = await announcementModel.create({ title, description, createdBy: req.user._id });
    return successResponse({ res, status: 201, data: { addAnnouncement } });
};
// Update Announcements
export const updateAnnouncement = async (req, res, next) => {
    const { annId } = req.params;

    const announcement = await announcementModel.findById(annId);
    if (!announcement) {
        return next(new Error("in-valid announcement id", { cause: 400 }));
    }

    if (req.body.title) {
        announcement.title = req.body.title;
    }
    if (req.body.description) {
        announcement.description = req.body.description;
    }

    announcement.updatedBy = req.user._id;
    const updateAnn = await announcement.save();

    return successResponse({ res , data : {updateAnn} });
};
//Delete Announcements
export const deleteAnnouncement = async (req, res, next) => {
    const {annId} = req.params;

    const announcement = await announcementModel.findById(annId);
    if (!announcement) {
        return next(new Error("in-valid announcement id", { cause: 400 }));
    }

    await announcementModel.findByIdAndDelete(annId);

    return successResponse({ res });
};