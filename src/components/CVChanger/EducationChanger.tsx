import EducationImage from "../../assets/school.svg";
import "../../styles/educationChanger.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    removeEducationByID,
    changeAllEducation,
    addEducation,
} from "../../features/educationSlice.ts";
import Accordion from "./Accordion.tsx";
import { FormEvent } from "react";

export default function EducationChanger() {
    const dispatch = useAppDispatch();
    const education = useAppSelector((state) => state.education);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const educationArray = education.map((edu) => {
            return {
                ...edu,
                schoolName: String(form.get(`school-${edu.id}`)),
                title: String(form.get(`title-${edu.id}`)),
                dateStart: String(form.get(`date-start-${edu.id}`)),
                dateEnd: String(form.get(`date-end-${edu.id}`)),
            };
        });
        dispatch(changeAllEducation(educationArray));
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{
                        src: EducationImage,
                        alt: "graduation-cap-image",
                    }}
                    title="Education"
                >
                    <ul>
                        {education.map((edu) => (
                            <li className="edu-li" key={edu.id}>
                                <input
                                    type="text"
                                    name={`school-${edu.id}`}
                                    placeholder="Enter school name"
                                    maxLength={100}
                                    defaultValue={edu.schoolName}
                                ></input>
                                <input
                                    type="text"
                                    name={`title-${edu.id}`}
                                    placeholder="Enter title of study"
                                    maxLength={50}
                                    defaultValue={edu.title}
                                ></input>

                                <label htmlFor={`date-start-${edu.id}`}>
                                    Starting date
                                </label>
                                <input
                                    placeholder="Enter starting date"
                                    type="month"
                                    name={`date-start-${edu.id}`}
                                    id={`date-start-${edu.id}`}
                                    defaultValue={edu.dateStart || ""}
                                />
                                <label htmlFor={`date-end-${edu.id}`}>
                                    Ending date
                                </label>

                                <input
                                    placeholder="Enter ending date"
                                    type="month"
                                    name={`date-end-${edu.id}`}
                                    id={`date-end-${edu.id}`}
                                    defaultValue={edu.dateEnd || ""}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(removeEducationByID(edu.id))
                                    }
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button
                            type="button"
                            onClick={() => dispatch(addEducation())}
                        >
                            Add
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </Accordion>
            </form>
        </section>
    );
}
