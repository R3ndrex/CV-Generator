export default function Education({ children }) {
    return (
        <section>
            <h2>Education</h2>
            <ul className="education">
                {children.map((element) => {
                    return <li key={element}>{element}</li>;
                })}
            </ul>
        </section>
    );
}
