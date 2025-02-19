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
    const [experience, setExperience] = useState([
        {
            companyName: "",
            title: "",
            respons: "",
            id: crypto.randomUUID(),
            dateStart: "",
            dateEnd: "",
        },
    ]);
    return (
        <>
            <Header onEdit={() => setShowEdit((prev) => !prev)} />
            <aside
                className={`main-aside ${
                    (!showEdit && "disabled") || "enabled"
                }`}
            >
                <GeneralInfoChanger
                    generalInfo={generalInfo}
                    ChangerHeader={ChangerHeader}
                    setGeneralInfo={setGeneralInfo}
                />
                <ContactChanger
                    contacts={contacts}
                    ChangerHeader={ChangerHeader}
                    setContacts={setContacts}
                />
                <AboutChanger
                    aboutText={aboutText}
                    ChangerHeader={ChangerHeader}
                    setAboutText={setAboutText}
                />
                <EducationChanger
                    ChangerHeader={ChangerHeader}
                    education={education}
                    setEducation={setEducation}
                />
                <WorkExperienceChanger
                    ChangerHeader={ChangerHeader}
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
