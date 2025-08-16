import { configureStore } from "@reduxjs/toolkit";
import announceSlice from './announceSlice';
import quizSlice from './quizSlice';

export const store = configureStore({
    reducer: {
        announceSlice,
        quizSlice
    }
})