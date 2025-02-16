import Contact from "./components/Contact.jsx";
import ContactChanger from "./components/ContactChanger.jsx";
import { useState } from "react";
import AboutChanger from "./components/AboutChanger.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import EducationChanger from "./components/EducationChanger.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import "./App.css";

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [education, setEducation] = useState([]);
    const [aboutText, setAboutText] = useState("");

    if (education[education.length - 1] !== "" && !education.includes("")) {
        setEducation((prev) => {
            return [...prev, ""];
        });
    }

    return (
        <>
            <header>
                <h1>CV-Generator</h1>
            </header>
            <aside className="main-aside">
                <ContactChanger setContacts={setContacts} />
                <AboutChanger setAboutText={setAboutText} />
                <EducationChanger
                    education={education}
                    setEducation={setEducation}
                ></EducationChanger>
            </aside>
            <main>
                <About>{aboutText}</About>
                <Education>{education}</Education>
                <aside className="cv-aside">
                    <Contact contacts={contacts} />
                    <WorkExperience />
                </aside>
            </main>
        </>
    );
}
