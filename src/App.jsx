import Contact from "./components/Contact.jsx";
import ContactChanger from "./components/ContactChanger.jsx";
import { useState } from "react";
import AboutChanger from "./components/AboutChanger.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import EducationChanger from "./components/EducationChanger.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import ImageChanger from "./components/ImageChanger.jsx";
import UserImage from "./components/UserImage.jsx";
import ChangerHeader from "./components/ChangerHeader.jsx";
import "./App.css";

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [education, setEducation] = useState([]);
    const [aboutText, setAboutText] = useState("");
    const [image, setImage] = useState(null);

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
                <ImageChanger
                    ChangerHeader={ChangerHeader}
                    setImage={setImage}
                ></ImageChanger>
                <ContactChanger
                    ChangerHeader={ChangerHeader}
                    setContacts={setContacts}
                />
                <AboutChanger
                    ChangerHeader={ChangerHeader}
                    setAboutText={setAboutText}
                />
                <EducationChanger
                    ChangerHeader={ChangerHeader}
                    education={education}
                    setEducation={setEducation}
                ></EducationChanger>
            </aside>
            <main>
                <h2>Lytvynenko Rostyslav</h2>
                <About>{aboutText}</About>
                <Education>{education}</Education>
                <aside className="cv-aside">
                    <UserImage src={image} />
                    <Contact contacts={contacts} />
                    <WorkExperience />
                </aside>
            </main>
        </>
    );
}
