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
import Accordion from "./components/Accordion.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import WorkExperienceChanger from "./components/WorkExperienceChanger.jsx";

export default function App() {
    const [showEdit, setShowEdit] = useState(false);
    const [contacts, setContacts] = useState([
        "1234567891",
        "random@mail.com",
        "Default home address",
        "https://linkedin.com/in/default",
    ]);
    const [education, setEducation] = useState([
        {
            schoolName: "University of Oxford",
            title: "Software Engineer",
            id: crypto.randomUUID(),
            dateStart: "2020-09-01",
            dateEnd: "2024-06-30",
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
    const [experience, setExperience] = useState([
        {
            companyName: "Google",
            title: "Frontend Developer",
            respons:
                "Developed and maintained user-facing features using React and JavaScript.",
            id: crypto.randomUUID(),
            dateStart: "2022-06-01",
            dateEnd: "2023-12-31",
        },
    ]);
    return (
        <>
            <Header
                showEdit={showEdit}
                onEdit={() => setShowEdit((prev) => !prev)}
            />
            <aside
                className={`main-aside ${
                    (!showEdit && "disabled") || "enabled"
                }`}
            >
                <GeneralInfoChanger
                    generalInfo={generalInfo}
                    Accordion={Accordion}
                    setGeneralInfo={setGeneralInfo}
                />
                <ContactChanger
                    contacts={contacts}
                    Accordion={Accordion}
                    setContacts={setContacts}
                />
                <AboutChanger
                    aboutText={aboutText}
                    Accordion={Accordion}
                    setAboutText={setAboutText}
                />
                <EducationChanger
                    Accordion={Accordion}
                    education={education}
                    setEducation={setEducation}
                />
                <WorkExperienceChanger
                    Accordion={Accordion}
                    experience={experience}
                    setExperience={setExperience}
                />
            </aside>
            <main className={`${(!showEdit && "centered-main") || ""}`}>
                <div>
                    {generalInfo.fullName && (
                        <h2 className="margin-bottom-0">
                            {generalInfo.fullName}
                        </h2>
                    )}
                    {generalInfo.profession && (
                        <h3>{generalInfo.profession}</h3>
                    )}
                </div>
                <About>{aboutText}</About>
                <Education>{education}</Education>
                <WorkExperience>{experience}</WorkExperience>
                <aside className="cv-aside">
                    <UserImage src={generalInfo.photoSrc} />
                    <Contact contacts={contacts} />
                </aside>
            </main>
        </>
    );
}
