import { useContext } from "react";
import Briefcase from "../../assets/briefcase.svg";
import "../../styles/workExperienceChanger.css";
import { UserContext } from "../../UserContext";

export default function WorkExperienceChanger({ Accordion }) {
    const { experience, setExperience } = useContext(UserContext);
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newExperience = experience.map((work) => ({
            ...work,
            companyName: formData.get(`company-${work.id}`),
            title: formData.get(`title-${work.id}`),
            respons: formData.get(`respons-${work.id}`),
            dateStart: formData.get(`dateStart-${work.id}`),
            dateEnd: formData.get(`dateEnd-${work.id}`),
        }));
        setExperience(newExperience);
    }
    function removeExperience(id) {
        setExperience((prev) => [...prev].filter((work) => work.id !== id));
    }

    function addExperience() {
        setExperience((prev) => [
            ...prev,
            {
                companyName: "",
                title: "",
                id: crypto.randomUUID(),
                respons: "",
                dateStart: "",
                dateEnd: "",
            },
        ]);
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    title="Work experience"
                    image={{ src: Briefcase, alt: "briefcase-image" }}
                >
                    <ul className="work-list-changers">
                        {experience.map((work) => (
                            <li className="work-list-item" key={work.id}>
                                <input
                                    type="text"
                                    id={`company-${work.id}`}
                                    name={`company-${work.id}`}
                                    placeholder="Enter company name"
                                    maxLength={50}
                                />
                                <input
                                    type="text"
                                    id={`title-${work.id}`}
                                    name={`title-${work.id}`}
                                    placeholder="Enter position title"
                                    maxLength={50}
                                />
                                <textarea
                                    name={`respons-${work.id}`}
                                    id={`respons-${work.id}`}
                                    placeholder="Enter main responsibilities"
                                    maxLength={500}
                                ></textarea>
                                <input
                                    type="month"
                                    name={`dateStart-${work.id}`}
                                    id={`dateStart-${work.id}`}
                                    placeholder="Enter start date"
                                />
                                <input
                                    type="month"
                                    name={`dateEnd-${work.id}`}
                                    id={`dateEnd-${work.id}`}
                                    placeholder="Enter end date"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeExperience(work.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button type="button" onClick={addExperience}>
                            Add
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </Accordion>
            </form>
        </section>
    );
}
