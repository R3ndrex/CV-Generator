import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import LightBuld from "../../assets/lightbulb-on.svg";
import "../../styles/skillsChanger.css";

export default function SkillsChanger({ Accordion }) {
    const { skills, setSkills } = useContext(UserContext);
    const [defaultSkills, setDefaultSkills] = useState(skills);

    function handleInputChange(newText, changingSkill) {
        setDefaultSkills((prev) => {
            return prev.map((skill) => {
                if (skill.id === changingSkill.id) {
                    return { ...skill, text: newText };
                }
                return skill;
            });
        });
    }

    function findSkillValue(changingSkill) {
        return defaultSkills.find((skill) => skill.id === changingSkill.id)
            .text;
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSkills(defaultSkills);
    }

    function handleAdd() {
        const newObject = { text: "", id: crypto.randomUUID() };
        setSkills((prev) => [...prev, newObject]);
        setDefaultSkills((prev) => [...prev, newObject]);
    }

    function handleRemove(removedSkill) {
        setSkills((prev) =>
            prev.filter((skill) => skill.id !== removedSkill.id)
        );
        setDefaultSkills((prev) =>
            prev.filter((skill) => skill.id !== removedSkill.id)
        );
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
                                        value={findSkillValue(skill)}
                                        onChange={(e) =>
                                            handleInputChange(
                                                e.currentTarget.value,
                                                skill
                                            )
                                        }
                                    />
                                    <button onClick={() => handleRemove(skill)}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </ul>
                    )}
                    <button onClick={handleAdd}>Add</button>
                    <button type="submit">Submit</button>
                </form>
            </Accordion>
        </section>
    );
}
