import Worker from "../../assets/account-hard-hat.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    addProject,
    removeProjectByID,
    changeAllProjects,
} from "../../features/projectsSlice";
import "../../styles/projectsChanger.css";
import { FormEvent } from "react";

import type { ProjectType } from "../../features/projectsSlice.ts";

export default function ProjectsChanger({ Accordion }) {
    const projects = useAppSelector((state) => state.projects);
    const dispatch = useAppDispatch();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const newProjects = projects.map((project) => ({
            ...project,
            title: String(form.get(`${project.id}-title`)),
            about: String(form.get(`${project.id}-about`)),
            link: String(form.get(`${project.id}-link`)),
        }));
        dispatch(changeAllProjects(newProjects));
    }

    return (
        <section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Accordion
                    title="Projects"
                    image={{ src: Worker, alt: "briefcase-image" }}
                >
                    <ul>
                        {(projects as ProjectType[]).map((project) => (
                            <ProjectItem key={project.id} project={project} />
                        ))}
                    </ul>
                    <div>
                        <button
                            type="button"
                            onClick={() => dispatch(addProject())}
                        >
                            Add
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </Accordion>
            </form>
        </section>
    );
}

function ProjectItem({ project, key }: { project: ProjectType; key: string }) {
    const dispatch = useAppDispatch();
    return (
        <li key={key} className="project-changer-item">
            <input
                type="text"
                name={`${project.id}-title`}
                id="title"
                placeholder="Write project title"
                defaultValue={project.title}
            />
            <input
                type="text"
                name={`${project.id}-link`}
                id="link"
                placeholder="Enter project link"
                defaultValue={project.link}
            />
            <textarea
                name={`${project.id}-about`}
                id="about"
                placeholder="Write project description"
                defaultValue={project.about}
                cols={40}
                rows={8}
                maxLength={500}
            />

            <button onClick={() => dispatch(removeProjectByID(project.id))}>
                Remove
            </button>
        </li>
    );
}
