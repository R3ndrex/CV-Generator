import ContactChanger from "./ContactChanger";
import AboutChanger from "./AboutChanger";
import EducationChanger from "./EducationChanger.jsx";
import GeneralInfoChanger from "./GeneralInfoChanger.jsx";
import Accordion from "./Accordion";
import WorkExperienceChanger from "./WorkExperienceChanger.tsx";
import SkillsChanger from "./SkillsChanger.tsx";
import ProjectsChanger from "./ProjectsChanger.tsx";

export default function CvChanger({ showEdit }: { showEdit: boolean }) {
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
