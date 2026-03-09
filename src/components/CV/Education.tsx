import "../../styles/education.css";
import { useAppSelector } from "../../app/hooks";
import ChangeDateStyle from "../../assets/utils.ts";

export default function Education() {
    const education = useAppSelector((state) => state.education);
    return (
        <>
            {education.length > 0 && (
                <section>
                    <h2 className="edu-title">Education</h2>
                    <ul className="education">
                        {education.map(
                            (edu) =>
                                edu && (
                                    <li className="educationLi" key={edu.id}>
                                        <div>{edu.schoolName}</div>
                                        <div>{edu.title}</div>
                                        {edu.dateStart && edu.dateEnd ? (
                                            <div>
                                                {ChangeDateStyle(edu.dateStart)}
                                                <br />
                                                {ChangeDateStyle(edu.dateEnd)}
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </li>
                                ),
                        )}
                    </ul>
                </section>
            )}
        </>
    );
}
