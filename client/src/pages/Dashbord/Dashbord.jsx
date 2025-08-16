import { Box, Grid, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import Navbar from "../../Components/Navbar/Navbar";
import SlideDashbord from "../../Components/SlideDashbord/SlideDashbord";
import Announcement from "../../Components/Announcement/Announcement";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export default function Dashbord() {
    const { t } = useContext(AuthContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 3, md: 3 }} sx={{ backgroundColor: "#165a7f", height: "100vh" }}>
                    <List
                        sx={{ width: '100%', maxWidth: 360 }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <Box sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontWeight: "bold", color: "#fff", mt: "15px", mb: "25px", fontSize: { xs: '15px', md: "25px" } }}>{t("Coligo")}</Typography>
                        </Box>
                        <ListItemButton
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiListItemIcon-root": {
                                        color: "#64c5b5",
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: "#64c5b5",
                                    },
                                },
                            }}
                        >
                            <ListItemIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${t("Dashboard")}`}
                                sx={{
                                    fontWeight: "bold",
                                    color: "#fff",
                                    my: "12px",
                                    "& .MuiTypography-root": {
                                        fontSize: { xs: "10px", md: "20px" }
                                    }
                                }}
                            />
                        </ListItemButton>

                        <ListItemButton
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiListItemIcon-root": {
                                        color: "#64c5b5",
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: "#64c5b5",
                                    },
                                },
                            }}>
                            <ListItemIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText sx={{
                                fontWeight: "bold",
                                color: "#fff",
                                my: "12px",
                                "& .MuiTypography-root": {
                                    fontSize: { xs: "10px", md: "20px" }
                                }
                            }} primary={`${t("Schedule")}`} />
                        </ListItemButton>

                        <ListItemButton
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiListItemIcon-root": {
                                        color: "#64c5b5",
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: "#64c5b5",
                                    },
                                },
                            }}>
                            <ListItemIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText sx={{
                                fontWeight: "bold",
                                color: "#fff",
                                my: "12px",
                                "& .MuiTypography-root": {
                                    fontSize: { xs: "10px", md: "20px" }
                                }
                            }} primary={`${t("Gradebook")}`} />
                        </ListItemButton>

                        <ListItemButton
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiListItemIcon-root": {
                                        color: "#64c5b5",
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: "#64c5b5",
                                    },
                                },
                            }}>
                            <ListItemIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText sx={{
                                fontWeight: "bold",
                                color: "#fff",
                                my: "12px",
                                "& .MuiTypography-root": {
                                    fontSize: { xs: "10px", md: "20px" }
                                }
                            }} primary={`${t("Performance")}`} />
                        </ListItemButton>

                        <ListItemButton
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiListItemIcon-root": {
                                        color: "#64c5b5",
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: "#64c5b5",
                                    },
                                },
                            }}>
                            <ListItemIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText sx={{
                                fontWeight: "bold",
                                color: "#fff",
                                my: "12px",
                                "& .MuiTypography-root": {
                                    fontSize: { xs: "10px", md: "20px" }
                                }
                            }} primary={`${t("Annonouncement")}`} />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid size={{ xs: 9, md: 9 }}>
                    <Grid container>
                        <Navbar />
                        <SlideDashbord />
                        <Announcement />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
