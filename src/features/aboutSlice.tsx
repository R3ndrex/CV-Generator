import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    text: "A passionate software engineer with experience in developing scalable web applications using modern technologies like React, JavaScript, and Node.js. Skilled in creating responsive user interfaces and working with cross-functional teams to deliver high-quality products. Always eager to learn new technologies and take on challenging projects.",
};
const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        changeText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});
export default aboutSlice.reducer;
export const { changeText } = aboutSlice.actions;
