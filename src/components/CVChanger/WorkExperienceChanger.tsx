import Briefcase from "../../assets/briefcase.svg";
import "../../styles/workExperienceChanger.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    addWorkExperience,
    changeAllWorkExperience,
    removeWorkExperience,
} from "../../features/workExperienceSlice.ts";
import { FormEvent } from "react";
import Accordion from "./Accordion.tsx";
export default function WorkExperienceChanger() {
    const workExperience = useAppSelector((state) => state.workExperience);
    const dispatch = useAppDispatch();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newExperience = workExperience.map((experience) => ({
            ...experience,
            companyName: String(formData.get(`company-${experience.id}`)),
            title: String(formData.get(`title-${experience.id}`)),
            respons: String(formData.get(`respons-${experience.id}`)),
            dateStart: String(formData.get(`dateStart-${experience.id}`)),
            dateEnd: String(formData.get(`dateEnd-${experience.id}`)),
        }));
        dispatch(changeAllWorkExperience(newExperience));
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    title="Work experience"
                    image={{ src: Briefcase, alt: "briefcase-image" }}
                >
                    <ul className="work-list-changers">
                        {workExperience.map((experience) => (
                            <li className="work-list-item" key={experience.id}>
                                <input
                                    type="text"
                                    id={`company-${experience.id}`}
                                    name={`company-${experience.id}`}
                                    defaultValue={experience.companyName}
                                    placeholder="Enter company name"
                                    maxLength={50}
                                />
                                <input
                                    type="text"
                                    id={`title-${experience.id}`}
                                    name={`title-${experience.id}`}
                                    defaultValue={experience.title}
                                    placeholder="Enter position title"
                                    maxLength={50}
                                />
                                <textarea
                                    name={`respons-${experience.id}`}
                                    id={`respons-${experience.id}`}
                                    defaultValue={experience.respons}
                                    placeholder="Enter main responsibilities"
                                    maxLength={500}
                                ></textarea>
                                <input
                                    type="month"
                                    name={`dateStart-${experience.id}`}
                                    id={`dateStart-${experience.id}`}
                                    defaultValue={experience.dateStart}
                                    placeholder="Enter start date"
                                />
                                <input
                                    type="month"
                                    name={`dateEnd-${experience.id}`}
                                    defaultValue={experience.dateEnd}
                                    id={`dateEnd-${experience.id}`}
                                    placeholder="Enter end date"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            removeWorkExperience(experience.id),
                                        )
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
                            onClick={() => dispatch(addWorkExperience())}
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
