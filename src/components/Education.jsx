export default function Education({ children }) {
    return (
        <section>
            <h2>Education</h2>
            <ul className="education">
                {children.map((element) => {
                    return (
                        element !== "" &&
                        element !== undefined && (
                            <li key={element}>{element}</li>
                        )
                    );
                })}
            </ul>
        </section>
    );
}
