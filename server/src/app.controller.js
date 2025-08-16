import DBConnect from "./DB/connect.js";
import announcementRouter from "./modules/Announcement/announcement.router.js";
import authRouter from "./modules/Auth/auth.routers.js";
import quizRouter from "./modules/Quiz/quiz.router.js";
import { globalError } from "./utils/response/asyncHandler.js";

import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bootstrap = (app, express) => {
    app.use(express.json());
    app.get("/", (req, res) => res.send("APP"));
    app.use(cors());



    app.use("/auth", authRouter);
    app.use('/announcement', announcementRouter);
    app.use("/quiz", quizRouter);

    app.use(express.static(path.join(__dirname, "./client/build")));

    // catch-all to serve index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    app.all("*", (req, res) => {
        return res.status(404).json({ message: `In-valid router - can not access this endPoint ${req.originalUrl}` })
    });


    app.use(globalError);
    DBConnect();
}

export default bootstrap;