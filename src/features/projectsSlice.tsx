import { createSlice } from "@reduxjs/toolkit";
import { removeElementByID, changeAllElements } from "./arrayMethods";
export interface ProjectType {
    title: string;
    about: string;
    link: string;
    id: string;
}

const initialState: ProjectType[] = [
    {
        title: "Youtube Clone",
        about: "Technologies: React, Redux, Firebase (or Node.js + Express), YouTube API, Tailwind CSS \n Description: A simplified YouTube clone that allows users to browse, search, and watch videos. The project demonstrates API integration, state management, and UI/UX skills.",
        link: "htpps://yotube-clone-example.com",
        id: crypto.randomUUID(),
    },
    {
        title: "Spotify Clone",
        about: "Technologies: React, Redux, Spotify API, Tailwind CSS \n Description: A Spotify-inspired music streaming app that allows users to browse, search, and play songs. The project demonstrates API integration, state management, and UI/UX design.",
        link: "htpps://spotify-clone-example.com",
        id: crypto.randomUUID(),
    },
];

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProject: (state) => {
            state.push({
                title: "",
                about: "",
                link: "",
                id: crypto.randomUUID(),
            });
        },
        removeProjectByID: removeElementByID<ProjectType>,
        changeAllProjects: changeAllElements<ProjectType>,
    },
});
export default projectsSlice.reducer;
export const { addProject, removeProjectByID, changeAllProjects } =
    projectsSlice.actions;
