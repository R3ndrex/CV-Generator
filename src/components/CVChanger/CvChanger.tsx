import ContactChanger from "./ContactChanger";
import AboutChanger from "./AboutChanger";
import EducationChanger from "./EducationChanger";
import GeneralInfoChanger from "./GeneralInfoChanger";
import WorkExperienceChanger from "./WorkExperienceChanger";
import SkillsChanger from "./SkillsChanger";
import ProjectsChanger from "./ProjectsChanger";

export default function CvChanger({ showEdit }: { showEdit: boolean }) {
    return (
        <aside
            className={`main-aside ${(!showEdit && "disabled") || "enabled"}`}
        >
            <GeneralInfoChanger />
            <ContactChanger />
            <AboutChanger />
            <EducationChanger />
            <WorkExperienceChanger />
            <SkillsChanger />
            <ProjectsChanger />
        </aside>
    );
}
