import "../../styles/projects.css";
import { useAppSelector } from "../../app/hooks";

export default function Projects() {
    const projects = useAppSelector((state) => state.projects);
    return (
        <>
            {projects.length > 0 && (
                <section>
                    <h2>Projects</h2>
                    <ul className="projects-ul">
                        {projects.map((project) => {
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
