import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostUrl } from "../utlis/host";

export const getAllAnnouncemrnts = createAsyncThunk('announcements/getAllAnnouncements', async function () {
    return await axios.get(`${hostUrl}/announcement`)
        .then(({ data }) => data.data.announcements)
});

const announcementSlice = createSlice({
    name: 'announcements',
    initialState: {
        allAnnonuncements: null,
        allQuizzes: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: function (builder) {
        builder.addCase(getAllAnnouncemrnts.fulfilled, function (state, action) {
            state.isLoading = false;
            state.allAnnonuncements = action.payload;
            state.isError = false;
        });
        builder.addCase(getAllAnnouncemrnts.pending, function (state, action) {
            state.isLoading = true;
        });
        builder.addCase(getAllAnnouncemrnts.rejected, function (state, action) {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default announcementSlice.reducer;