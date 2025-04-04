import About from "./About.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";
import CvAside from "./CvAside.jsx";
import Skills from "./Skills.jsx";
import UserIdentity from "./UserIdentity.jsx";
import Projects from "./Projects.jsx";
import { useContext } from "react";
import { UserContext } from "../../UserContext.js";

export default function CV() {
    const {
        showEdit,
        generalInfo,
        aboutText,
        education,
        experience,
        contacts,
        skills,
        projects,
    } = useContext(UserContext);
    return (
        <main className={`${(!showEdit && "centered-main") || ""}`}>
            <UserIdentity generalInfo={generalInfo} />
            <About>{aboutText}</About>
            <Skills>{skills}</Skills>
            <Education>{education}</Education>
            <WorkExperience>{experience}</WorkExperience>
            <CvAside contacts={contacts} imageSrc={generalInfo.photoSrc} />
            <Projects>{projects}</Projects>
            <button onClick={window.print}>Create File</button>
        </main>
    );
}
