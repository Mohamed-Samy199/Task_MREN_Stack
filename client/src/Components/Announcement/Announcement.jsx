import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import profile from "../../assets/profile.webp";
import Quiz from "../Quiz/Quiz";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { getAllAnnouncemrnts } from "../../redux/announceSlice";
import { AuthContext } from "../../context/auth";


export default function Announcement() {
    const dispatch = useDispatch();
    const { allAnnonuncements } = useSelector((store) => store.announceSlice);
    const { t } = useContext(AuthContext);

    useEffect(() => {
        dispatch(getAllAnnouncemrnts())
    }, []);
    return (
        <Grid container spacing={2} sx={{ p: "15px" }}>
            <Grid size={{ xs: 12, md: 8 }} sx={{ boxShadow: "1px 0px 20px 1px #666", borderRadius: "10px", height: "fit-content" }}>

                <Card sx={{ p: "18px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <Typography component="div" sx={{ fontWeight: "bold", color: "#165a7f", fontSize: { xs: '15px', md: "25px" } }}>
                                {t("Annonouncement")}
                            </Typography>
                            <p style={{ color: "#6b716f" }}>{t("student quizzes")}</p>
                        </div>

                        <Typography component="div" variant="h6" color="#64c5b5">
                            {t("All")}
                        </Typography>
                    </Box>


                    {
                        allAnnonuncements && allAnnonuncements?.map((annonuncement) => (
                            <Box key={annonuncement._id} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                <CardContent sx={{ display: "flex", gap: "5px", alignItems: "start", width: { xs: 'auto', md: '40%' } }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 50 }}
                                        image={profile}
                                        alt="profile"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <Typography component="div" variant="h5" sx={{ fontSize: "20px" }}>
                                            {t("MR | MS / User")}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            component="div"
                                            sx={{ color: 'text.secondary' }}
                                        >
                                            {t("title")} : {annonuncement.title}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{ width: { xs: 'auto', md: '60%' } }} >


                                    <Typography
                                        variant="subtitle1"
                                        component="p"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {annonuncement.description}
                                    </Typography>
                                </CardContent>
                            </Box>
                        ))
                    }

                </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} sx={{ boxShadow: "1px 0px 20px 1px #666", borderRadius: "10px", height: "fit-content" }}>
                <Quiz />
            </Grid>

        </Grid>
    )
}
