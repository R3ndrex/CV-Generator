import "../styles/education.css";
export default function Education({ children }) {
    return (
        <section>
            <h2>Education</h2>
            <ul className="education">
                {children.map((element) => {
                    return (
                        element !== "" &&
                        element !== undefined && (
                            <li className="educationLi" key={element.id}>
                                <div>{element.schoolName}</div>
                                <div>
                                    {element.dateStart}
                                    {element.dateStart &&
                                        element.dateEnd &&
                                        "-"}
                                    {element.dateEnd}
                                </div>
                                <div>{element.title}</div>
                            </li>
                        )
                    );
                })}
            </ul>
        </section>
    );
}
