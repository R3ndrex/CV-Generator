import Contact from "./components/Contact.jsx";
import ContactChanger from "./components/ContactChanger.jsx";
import { useState } from "react";
import AboutChanger from "./components/AboutChanger.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import EducationChanger from "./components/EducationChanger.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import GeneralInfoChanger from "./components/GeneralInfoChanger.jsx";
import UserImage from "./components/UserImage.jsx";
import ChangerHeader from "./components/ChangerHeader.jsx";
import "./App.css";

export default function App() {
    const [contacts, setContacts] = useState(["1234567891"]);
    const [education, setEducation] = useState([
        {
            schoolName: "",
            title: "",
            id: crypto.randomUUID(),
            date: null,
        },
    ]);
    const [aboutText, setAboutText] = useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur voluptate voluptates ex sapiente, consectetur porro veniam minus repellendus praesentium? Consequuntur tenetur dolorem magni fugiat hic! Amet tempora assumenda error eligendi culpa laboriosam fuga nostrum voluptate aperiam sequi deleniti facilis, aliquam corporis rem quo libero molestias! Quae vero suscipit earum!"
    );
    const [generalInfo, setGeneralInfo] = useState({
        fullName: "John Doe",
        photoSrc: null,
        profession: "Software engineer",
    });
    return (
        <>
            <header>
                <h1>CV-Generator</h1>
            </header>
            <aside className="main-aside">
                <GeneralInfoChanger
                    ChangerHeader={ChangerHeader}
                    setGeneralInfo={setGeneralInfo}
                />
                <ContactChanger
                    contacts={contacts}
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
                />
            </aside>
            <main>
                <div>
                    <h2 className="margin-bottom-0">{generalInfo.fullName}</h2>
                    <h3>{generalInfo.profession}</h3>
                </div>
                <About>{aboutText}</About>
                <Education>{education}</Education>
                <aside className="cv-aside">
                    <UserImage src={generalInfo.photoSrc} />
                    <Contact contacts={contacts} />
                    <WorkExperience />
                </aside>
            </main>
        </>
    );
}
