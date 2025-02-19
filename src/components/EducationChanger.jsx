import { useState } from "react";
import EducationImage from "../assets/school.svg";
import "../styles/educationChanger.css";
export default function EducationChanger({
    ChangerHeader,
    education,
    setEducation,
}) {
    const [defaultEducation, setDefaultEducation] = useState([...education]); //todo
    function AddEmptyElement() {
        setEducation((prev) => {
            return [
                ...prev,
                {
                    schoolName: "",
                    title: "",
                    id: crypto.randomUUID(),
                    date: null,
                },
            ];
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const educationArray = education.map((edu) => {
            console.log(form.get(`school-${edu.id}`));
            return {
                ...edu,
                schoolName: form.get(`school-${edu.id}`),
                title: form.get(`title-${edu.id}`),
                dateStart: form.get(`date-start-${edu.id}`),
                dateEnd: form.get(`date-end-${edu.id}`),
            };
        });
        setEducation(educationArray);
    }

    function removePositionedElement(id) {
        setEducation((prev) => [...prev].filter((edu) => edu.id !== id));
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <ChangerHeader
                        image={{
                            src: EducationImage,
                            alt: "graduation-cap-image",
                        }}
                        title="Education"
                    >
                        <ul>
                            {education.map((edu) => {
                                return (
                                    <li className="edu-li" key={edu.id}>
                                        <input
                                            type="text"
                                            name={`school-${edu.id}`}
                                            placeholder="Enter school name"
                                            defaultValue={edu.schoolName}
                                        ></input>
                                        <input
                                            type="text"
                                            name={`title-${edu.id}`}
                                            placeholder="Enter title of study"
                                            defaultValue={edu.title}
                                        ></input>

                                        <label htmlFor={`date-start-${edu.id}`}>
                                            Starting date
                                        </label>
                                        <input
                                            placeholder="Enter starting date"
                                            type="date"
                                            name={`date-start-${edu.id}`}
                                            id={`date-start-${edu.id}`}
                                            defaultValue={edu.dateStart}
                                        />
                                        <label htmlFor={`date-end-${edu.id}`}>
                                            Ending date
                                        </label>

                                        <input
                                            placeholder="Enter ending date"
                                            type="date"
                                            name={`date-end-${edu.id}`}
                                            id={`date-end-${edu.id}`}
                                            defaultValue={edu.dateEnd}
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removePositionedElement(edu.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <div>
                            <button type="button" onClick={AddEmptyElement}>
                                Add
                            </button>
                            <button type="submit">Submit</button>
                        </div>
                    </ChangerHeader>
                </form>
            </section>
        </>
    );
}
