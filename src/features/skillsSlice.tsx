import { createSlice } from "@reduxjs/toolkit";
import { removeElementByID, changeAllElements } from "./arrayMethods";

interface SkillType {
    text: string;
    id: string;
}

const initialState: SkillType[] = [
    {
        text: "Good knowledge of HTML",
        id: crypto.randomUUID(),
    },
    {
        text: "Good knowledge of CSS",
        id: crypto.randomUUID(),
    },
    {
        text: "Good knowledge of JavaScript",
        id: crypto.randomUUID(),
    },
];
const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        addSkill: (state) => {
            state.push({ text: "", id: crypto.randomUUID() });
        },
        removeSkill: removeElementByID<SkillType>,
        changeAllSkills: changeAllElements<SkillType>,
    },
});
export default skillsSlice.reducer;
export const { addSkill, removeSkill, changeAllSkills } = skillsSlice.actions;
