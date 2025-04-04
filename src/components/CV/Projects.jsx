import "../../styles/projects.css";
export default function Projects({ children }) {
    return (
        <>
            {children.length > 0 && (
                <section>
                    <h2>Projects</h2>
                    <ul className="projects-ul">
                        {children.map((project) => {
                            return (
                                <li className="projects-item" key={project.id}>
                                    <h3>{project.title}</h3>
                                    <p>{project.about}</p>
                                    <span>{project.link}</span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}
        </>
    );
}
