import About from "./About.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";
import CvAside from "./CvAside.jsx";
import UserIdentity from "./UserIdentity.jsx";
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
    } = useContext(UserContext);
    return (
        <main className={`${(!showEdit && "centered-main") || ""}`}>
            <UserIdentity generalInfo={generalInfo} />
            <About>{aboutText}</About>
            <Education>{education}</Education>
            <WorkExperience>{experience}</WorkExperience>
            <CvAside contacts={contacts} imageSrc={generalInfo.photoSrc} />
            <button onClick={window.print}>Create File</button>
        </main>
    );
}
