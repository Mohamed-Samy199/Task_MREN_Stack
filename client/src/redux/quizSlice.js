import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostUrl } from "../utlis/host";


export const getAllQuizzes = createAsyncThunk('quiz/getAllQuizzes', async function () {
    return axios.get(`${hostUrl}/quiz`)
        .then(({ data }) => data.data.quizzes)
});

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        allQuizzes: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: function (builder) {
        builder.addCase(getAllQuizzes.fulfilled, function (state, action) {
            state.isLoading = false;
            state.allQuizzes = action.payload;
            state.isError = false;
        });
        builder.addCase(getAllQuizzes.pending, function (state, action) {
            state.isLoading = true;
        });
        builder.addCase(getAllQuizzes.rejected, function (state, action) {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default quizSlice.reducer;