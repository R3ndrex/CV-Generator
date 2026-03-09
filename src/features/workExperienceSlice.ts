import { createSlice } from "@reduxjs/toolkit";
import { removeElementByID, changeAllElements } from "./arrayMethods";
interface workExperienceType {
    companyName: string;
    title: string;
    respons: string;
    id: string;
    dateStart?: string;
    dateEnd?: string;
}
const initialState: workExperienceType[] = [
    {
        companyName: "Google",
        title: "Frontend Developer",
        respons:
            "Developed and maintained user-facing features using React and JavaScript.",
        id: crypto.randomUUID(),
        dateStart: "2022-06",
        dateEnd: "2023-12",
    },
];
const workExperienceSlice = createSlice({
    name: "workExperience",
    initialState,
    reducers: {
        addWorkExperience: (state) => {
            state.push({
                companyName: "",
                title: "",
                id: crypto.randomUUID(),
                respons: "",
                dateStart: "",
                dateEnd: "",
            });
        },
        changeAllWorkExperience: changeAllElements<workExperienceType>,
        removeWorkExperience: removeElementByID<workExperienceType>,
    },
});
export default workExperienceSlice.reducer;
export const {
    addWorkExperience,
    changeAllWorkExperience,
    removeWorkExperience,
} = workExperienceSlice.actions;
