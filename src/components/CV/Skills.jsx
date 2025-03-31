import "../../styles/skills.css";
export default function Skills({ children }) {
    return (
        <>
            {children.length > 0 && (
                <section>
                    <h2>Skills</h2>
                    <ul className="skill-list">
                        {children.map(
                            (element) =>
                                element !== "" &&
                                element !== undefined && (
                                    <li className="skill" key={element.id}>
                                        {element.text}
                                    </li>
                                )
                        )}
                    </ul>
                </section>
            )}
        </>
    );
}
