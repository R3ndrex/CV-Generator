import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type GeneralInfoType = {
    fullName: string;
    photoSrc: null | string;
    profession: string;
};

const initialState: GeneralInfoType = {
    fullName: "John Doe",
    photoSrc: null,
    profession: "Software engineer",
};
const generalInfoSlice = createSlice({
    name: "generalInfo",
    initialState,
    reducers: {
        changeImage: (state, action: PayloadAction<string>) => {
            state.photoSrc = action.payload;
        },
        changeName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
        changeProfession: (state, action: PayloadAction<string>) => {
            state.profession = action.payload;
        },
    },
});
export default generalInfoSlice.reducer;
export const { changeImage, changeName, changeProfession } =
    generalInfoSlice.actions;
