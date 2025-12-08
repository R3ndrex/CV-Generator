import "../../styles/skills.css";
import { useAppSelector } from "../../app/hooks";
export default function Skills() {
    const skills = useAppSelector((state) => state.skills);
    return (
        <>
            {skills.length > 0 && (
                <section>
                    <h2>Skills</h2>
                    <ul className="skill-list">
                        {skills.map(
                            (skill) =>
                                skill.text !== "" &&
                                skill.id && (
                                    <li className="skill" key={skill.id}>
                                        {skill.text}
                                    </li>
                                )
                        )}
                    </ul>
                </section>
            )}
        </>
    );
}
