export default function WorkExperience({ children }) {
    return (
        <section>
            <h2>Work experience</h2>
            <ul>
                {children.map((work) => (
                    <li className="work-item" key={work.id}>
                        <div>{work.companyName}</div>
                        {work.dateStart && work.dateEnd && (
                            <div className="date-container">
                                ({work.dateStart})-({work.dateEnd})
                            </div>
                        )}
                        <div>{work.title}</div>
                        <p>{work.respons}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
