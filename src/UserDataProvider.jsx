import {
    contactsExample,
    aboutExample,
    generalInfoExample,
    experienceExample,
    educationExample,
    skillsExample,
} from "./assets/examples.js";

import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserDataProvider({ children }) {
    const [showEdit, setShowEdit] = useState(false);
    const [generalInfo, setGeneralInfo] = useState({ ...generalInfoExample });
    const [contacts, setContacts] = useState([...contactsExample]);
    const [education, setEducation] = useState([{ ...educationExample }]);
    const [aboutText, setAboutText] = useState(aboutExample);
    const [experience, setExperience] = useState([{ ...experienceExample }]);
    const [skills, setSkills] = useState([...skillsExample]);

    return (
        <UserContext
            value={{
                showEdit,
                setShowEdit,
                generalInfo,
                setGeneralInfo,
                contacts,
                setContacts,
                education,
                setEducation,
                aboutText,
                setAboutText,
                experience,
                setExperience,
                skills,
                setSkills,
            }}
        >
            {children}
        </UserContext>
    );
}
