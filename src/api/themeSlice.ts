// src/store/themeSlice.ts
import { THEME_COLORS } from "@/utils/theme";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
    secondaryColor: string;
};

const initialState: ThemeState = {
    secondaryColor: THEME_COLORS.THEME_TEAL,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setSecondaryColor(state, action: PayloadAction<string>) {
            state.secondaryColor = action.payload;
        },
    },
});

export const { setSecondaryColor } = themeSlice.actions;

export default themeSlice.reducer;
