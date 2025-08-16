import { Router } from "express";
import { asyncHandler } from "../../utils/response/asyncHandler.js";
import { addAnnouncement, deleteAnnouncement, getAnnouncements, updateAnnouncement } from "./announcement.controller.js";
import { auth } from "../../Middelware/authuntication.js";
import { endPoint } from "../../utils/autharization.js";

const announcementRouter = Router();

announcementRouter.get("/" , asyncHandler(getAnnouncements));
announcementRouter.post("/" ,auth(endPoint.user), asyncHandler(addAnnouncement));
announcementRouter.put("/:annId" ,auth(endPoint.user), asyncHandler(updateAnnouncement));
announcementRouter.delete("/:annId" ,auth(endPoint.user), asyncHandler(deleteAnnouncement));


export default announcementRouter;