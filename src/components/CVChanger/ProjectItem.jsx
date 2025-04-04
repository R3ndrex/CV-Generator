import "../../styles/projectsChanger.css";

export default function ProjectItem({
    project,
    setDefaultProjects,
    setProjects,
    defaultProjects,
}) {
    function handleRemove(id) {
        setDefaultProjects((prev) =>
            prev.filter((project) => project.id !== id)
        );
        setProjects((prev) => prev.filter((project) => project.id !== id));
    }

    function findItemAndReturnValue(item, prop) {
        const element = defaultProjects.find(
            (element) => element.id === item.id
        );
        if (!element || !(prop in element)) {
            return "";
        }
        return element[prop];
    }

    function handleObjectPropChange(e, id, prop) {
        setDefaultProjects((prev) =>
            prev.map((project) =>
                project.id === id
                    ? { ...project, [prop]: e.target.value }
                    : project
            )
        );
    }
    return (
        <li className="project-changer-item">
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Write project title"
                value={findItemAndReturnValue(project, "title")}
                onChange={(e) => handleObjectPropChange(e, project.id, "title")}
            />
            <input
                type="text"
                name="link"
                id="link"
                placeholder="Write project link"
                onChange={(e) => handleObjectPropChange(e, project.id, "link")}
                value={findItemAndReturnValue(project, "link")}
            />
            <textarea
                name="about"
                id="about"
                placeholder="Write project description"
                onChange={(e) => handleObjectPropChange(e, project.id, "about")}
                value={findItemAndReturnValue(project, "about")}
                cols={40}
                rows={8}
                maxLength={500}
            ></textarea>

            <button onClick={() => handleRemove(project.id)}>Remove</button>
        </li>
    );
}
