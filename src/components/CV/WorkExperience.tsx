import "../../styles/workExperience.css";
import { useAppSelector } from "../../app/hooks";
import ChangeDateStyle from "../../assets/utils.ts";
export default function WorkExperience() {
    const workExperience = useAppSelector((state) => state.workExperience);
    return (
        <>
            {workExperience.length !== 0 && (
                <section className="work-experience">
                    <h2>Work experience</h2>
                    <ul className="work-list">
                        {workExperience.map((experience) => (
                            <li className="work-item" key={experience.id}>
                                <div>{experience.companyName}</div>
                                <div className="date-container">
                                    {experience.dateStart &&
                                        experience.dateEnd && (
                                            <>
                                                {ChangeDateStyle(
                                                    experience.dateStart,
                                                )}{" "}
                                                <br />
                                                {ChangeDateStyle(
                                                    experience.dateEnd,
                                                )}
                                            </>
                                        )}
                                </div>
                                <div>{experience.title}</div>
                                <p>{experience.respons}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}
