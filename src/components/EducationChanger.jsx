import { useState } from "react";
import EducationImage from "../assets/school.svg";
export default function EducationChanger({ education, setEducation }) {
    const [focus, setFocus] = useState(null);
    return (
        <>
            <section>
                <div className="h2-section">
                    <img
                        className="h2-image"
                        src={EducationImage}
                        alt="graduation cap image"
                    />
                    <h2>Education </h2>
                </div>
                <ul>
                    {education.map((edu, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type="text"
                                    value={edu}
                                    onFocus={() => setFocus(index)}
                                    autoFocus={focus === index}
                                    onBlur={() =>
                                        education.includes("") &&
                                        education.length > 1 &&
                                        setEducation((prev) =>
                                            prev.filter(
                                                (element) =>
                                                    element.trim() !== ""
                                            )
                                        )
                                    }
                                    onChange={(e) => {
                                        setEducation((prev) => {
                                            const changed = [...prev];
                                            changed[index] = e.target.value;
                                            return changed;
                                        });
                                    }}
                                ></input>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
