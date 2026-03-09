import { configureStore } from "@reduxjs/toolkit";
import about from "../features/aboutSlice.ts";
import contact from "../features/contactSlice.ts";
import education from "../features/educationSlice.ts";
import generalInfo from "../features/generalInfo.ts";
import skills from "../features/skillsSlice.ts";
import workExperience from "../features/workExperienceSlice.ts";
import projects from "../features/projectsSlice.ts";
export const store = configureStore({
    reducer: {
        about,
        contact,
        education,
        generalInfo,
        skills,
        workExperience,
        projects,
    },
});
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
