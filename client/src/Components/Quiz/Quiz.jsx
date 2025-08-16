import { Box, Card, Typography } from '@mui/material'
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuizzes } from '../../redux/quizSlice';
import { AuthContext } from '../../context/auth';

export default function Quiz() {
    const dispatch = useDispatch();
    const { allQuizzes } = useSelector((store) => store.quizSlice);
    const { t } = useContext(AuthContext);

    useEffect(() => {
        dispatch(getAllQuizzes())
    }, []);

    return (
        <Card sx={{ p: "18px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Typography component="div" sx={{ fontWeight: "bold", color: "#165a7f", fontSize: "25px" }}>
                        {t("What's due")}
                    </Typography>
                    <p style={{ color: "#6b716f" }}>{t("This project quizzes semester.")}</p>
                </div>
                <Typography component="div" variant="h6" color="#64c5b5">
                    {t("All")}
                </Typography>
            </Box>

            {
                allQuizzes && allQuizzes?.map((quiz) => (
                    <Box key={quiz._id} sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <Typography component="div" variant="h5">
                            {quiz.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="p"
                            sx={{ color: 'text.secondary' }}
                        >
                            {t("semester")} : {quiz.semester}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="p"
                            sx={{ color: 'text.secondary', my: "10px" }}
                        >
                            {t("date")} : {quiz.date}
                        </Typography>
                        <button className="quiz-btn" style={{ marginBottom: "15px" }}>
                            {t("start now")}
                        </button>
                    </Box>
                ))
            }
        </Card>
    )
}
