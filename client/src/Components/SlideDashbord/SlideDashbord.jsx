import { Grid, Typography } from "@mui/material";
import homeImg from "../../assets/home.png";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";


export default function SlideDashbord() {
    const { t } = useContext(AuthContext);

    return (
        <Grid container spacing={2} sx={{ boxShadow: "1px 0px 20px 1px #666", m: "10px", borderRadius: "10px", height: "35vh" }} >
            <Grid size={{ xs: 12, md: 8 }} sx={{ p: "18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <h2 style={{ fontWeight: "bold", color: "#165a7f", fontSize: "25px" }}>{t("EXAMS TIME")}</h2>
                <Typography sx={{ display: { xs: 'none', md: 'flex' }, color: "#6b716f" }} component="p" >{t("This project")}</Typography>
                <Typography sx={{ color: "#373a39ff" }} component="p">{t("student quizzes")}</Typography>
                <div>
                    <button className="main-btn">{t("View exams tips")}</button>
                </div>
            </Grid>
            <Grid size={{ xs: 0, md: 4 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <div style={{ height: "33vh" }}>
                    <img src={homeImg} alt="home" style={{ width: "100%", height: "100%", overflow: "hidden", objectFit: "contain" }} />
                </div>
            </Grid>
        </Grid>
    )
}
