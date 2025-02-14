import Contact from "./components/ContactSection.jsx";
import ContactChanger from "./components/ContactChanger.jsx";
import { useState } from "react";
import AboutChanger from "./components/AboutChanger.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import "./App.css";

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [education, setEducation] = useState([]);
    const [aboutText, setAboutText] = useState([]);

    return (
        <>
            <header>
                <h1>CV-Generator</h1>
            </header>
            <aside className="main-aside">
                <ContactChanger contacts={contacts} setContacts={setContacts} />
                <AboutChanger setAboutText={setAboutText} />
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
