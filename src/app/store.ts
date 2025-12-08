import { configureStore } from "@reduxjs/toolkit";
import about from "../features/aboutSlice";
import contact from "../features/contactSlice";
import education from "../features/educationSlice";
import generalInfo from "../features/generalInfo";
import skills from "../features/skillsSlice";
import workExperience from "../features/workExperienceSlice";
import projects from "../features/projectsSlice";
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
