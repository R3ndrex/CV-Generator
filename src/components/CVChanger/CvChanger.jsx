import ContactChanger from "./ContactChanger.jsx";
import AboutChanger from "./AboutChanger.jsx";
import EducationChanger from "./EducationChanger.jsx";
import GeneralInfoChanger from "./GeneralInfoChanger.jsx";
import Accordion from "./Accordion.jsx";
import WorkExperienceChanger from "./WorkExperienceChanger.jsx";
import SkillsChanger from "./SkillsChanger.jsx";
import ProjectsChanger from "./ProjectsChanger.jsx";
import { useContext } from "react";
import { UserContext } from "../../UserContext.js";

export default function CvChanger() {
    const { showEdit } = useContext(UserContext);
    return (
        <aside
            className={`main-aside ${(!showEdit && "disabled") || "enabled"}`}
        >
            <GeneralInfoChanger Accordion={Accordion} />
            <ContactChanger Accordion={Accordion} />
            <AboutChanger Accordion={Accordion} />
            <EducationChanger Accordion={Accordion} />
            <WorkExperienceChanger Accordion={Accordion} />
            <SkillsChanger Accordion={Accordion} />
            <ProjectsChanger Accordion={Accordion} />
        </aside>
    );
}
