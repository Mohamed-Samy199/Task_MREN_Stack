import { Grid } from "@mui/material";
import homeImg from "../../assets/home.png";
import Login from "../../Components/Login/Login";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export default function Home() {
    const { t } = useContext(AuthContext);

    return (
        <main>
            <Navbar />
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h1 style={{ fontWeight: "bold", color: "#165a7f" }}>{t("E-learning")}</h1>
                    <h3 style={{ fontWeight: "bold", margin: "10px" }}>{t("Excellence Discover")}</h3>
                    <Login />
                </Grid>
                <Grid size={{ xs: 0, md: 6 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <div >
                        <img src={homeImg} alt="home" />
                    </div>
                </Grid>
            </Grid>
        </main>
    )
}
