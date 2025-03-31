import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import LightBuld from "../../assets/lightbulb-on.svg";

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

    return (
        <section>
            <Accordion
                image={{ src: LightBuld, alt: "lightbulb" }}
                title="Skills"
            >
                <form onSubmit={handleSubmit}>
                    {skills.length > 0 && (
                        <ul>
                            {skills.map((skill) => (
                                <input
                                    key={skill.id}
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
                            ))}
                            <button type="submit">Submit</button>
                        </ul>
                    )}
                </form>
            </Accordion>
        </section>
    );
}
