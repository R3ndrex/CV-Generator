import About from "./About.tsx";
import Education from "./Education.tsx";
import WorkExperience from "./WorkExperience.tsx";
import CvAside from "./CvAside.tsx";
import Skills from "./Skills.tsx";
import UserIdentity from "./UserIdentity.tsx";
import Projects from "./Projects.tsx";

export default function CV({ showEdit }: { showEdit: boolean }) {
    return (
        <main className={`${(!showEdit && "centered-main") || ""}`}>
            <UserIdentity />
            <About />
            <Skills />
            <Education />
            <WorkExperience />
            <CvAside />
            <Projects />
            <button onClick={() => window.print()}>Create File</button>
        </main>
    );
}
