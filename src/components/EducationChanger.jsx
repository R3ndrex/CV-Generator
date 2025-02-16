import EducationImage from "../assets/school.svg";

export default function EducationChanger({ education, setEducation }) {
    return (
        <>
            <section>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = new FormData(e.currentTarget);
                        let educationArray = education.map((_, index) =>
                            form.get(index)
                        );
                        setEducation([...educationArray]);
                    }}
                >
                    <div className="h2-section">
                        <img
                            className="h2-image"
                            src={EducationImage}
                            alt="graduation cap image"
                        />
                        <h2>Education </h2>
                    </div>
                    <ul>
                        {education.map((_, index) => {
                            return (
                                <li key={index}>
                                    <input type="text" name={index}></input>
                                </li>
                            );
                        })}
                    </ul>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}
