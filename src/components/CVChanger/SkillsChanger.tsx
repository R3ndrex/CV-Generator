import LightBuld from "../../assets/lightbulb-on.svg";
import "../../styles/skillsChanger.css";
import {
    addSkill,
    removeSkill,
    changeAllSkills,
} from "../../features/skillsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FormEvent } from "react";

export default function SkillsChanger({ Accordion }) {
    const skills = useAppSelector((state) => state.skills);
    const dispatch = useAppDispatch();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const newSkills = skills.map((skill) => ({
            ...skill,
            text: String(form.get(`${skill.id}-name`)),
        }));
        dispatch(changeAllSkills(newSkills));
    }

    return (
        <section>
            <Accordion
                image={{ src: LightBuld, alt: "lightbulb" }}
                title="Skills"
            >
                <form onSubmit={handleSubmit}>
                    {skills.length > 0 && (
                        <ul className="skill-changer-list">
                            {skills.map((skill) => (
                                <div key={skill.id} className="skill-input">
                                    <input
                                        type="text"
                                        name={skill.id + "-name"}
                                        id={skill.id + "-id"}
                                        defaultValue={skill.text}
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            dispatch(removeSkill(skill.id))
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </ul>
                    )}
                    <button type="button" onClick={() => dispatch(addSkill())}>
                        Add
                    </button>
                    <button type="submit">Submit</button>
                </form>
            </Accordion>
        </section>
    );
}
