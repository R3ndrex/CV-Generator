import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import ProjectItem from "./ProjectItem";
import Worker from "../../assets/account-hard-hat.svg";

export default function ProjectsChanger({ Accordion }) {
    const { projects, setProjects } = useContext(UserContext);
    const [defaultProjects, setDefaultProjects] = useState([
        ...(projects || []),
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        setProjects(defaultProjects);
    }
    function handleAdd() {
        const newProject = {
            title: "",
            about: "",
            link: "",
            id: crypto.randomUUID(),
        };
        setDefaultProjects((prev) => [...prev, newProject]);
        setProjects((prev) => [...prev, newProject]);
    }

    return (
        <section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Accordion
                    title="Projects"
                    image={{ src: Worker, alt: "briefcase-image" }}
                >
                    <ul>
                        {projects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                project={project}
                                setDefaultProjects={setDefaultProjects}
                                setProjects={setProjects}
                                defaultProjects={defaultProjects}
                            />
                        ))}
                    </ul>
                    <div>
                        <button type="button" onClick={handleAdd}>
                            Add
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </Accordion>
            </form>
        </section>
    );
}
