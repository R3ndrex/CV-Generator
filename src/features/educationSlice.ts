import { createSlice } from "@reduxjs/toolkit";
import { removeElementByID, changeAllElements } from "./arrayMethods";
interface Education {
    schoolName: string;
    title: string;
    id: string;
    dateStart?: string;
    dateEnd?: string;
}

const initialState: Education[] = [
    {
        schoolName: "University of Oxford",
        title: "Software Engineer",
        id: crypto.randomUUID(),
        dateStart: "2020-09",
        dateEnd: "2024-05",
    },
];

const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addEducation: (state) => {
            state.push({
                schoolName: "",
                title: "",
                id: crypto.randomUUID(),
            });
        },
        changeAllEducation: changeAllElements<Education>,
        removeEducationByID: removeElementByID<Education>,
    },
});
export default educationSlice.reducer;
export const { removeEducationByID, changeAllEducation, addEducation } =
    educationSlice.actions;
