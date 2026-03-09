import ContactChanger from "./ContactChanger";
import AboutChanger from "./AboutChanger";
import EducationChanger from "./EducationChanger";
import GeneralInfoChanger from "./GeneralInfoChanger";
import Accordion from "./Accordion";
import WorkExperienceChanger from "./WorkExperienceChanger";
import SkillsChanger from "./SkillsChanger";
import ProjectsChanger from "./ProjectsChanger";

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
