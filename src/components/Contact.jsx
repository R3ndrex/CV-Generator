import { inputs } from "../assets/inputs";

export default function Contact({ contacts }) {
    return (
        <>
            <section>
                <h2>Contact</h2>
                <ul>
                    {contacts.map((contact, index) => {
                        return (
                            <li key={inputs[index].id}>
                                {contact !== "" && contact !== undefined && (
                                    <img
                                        className="pictogram"
                                        src={inputs[index].image}
                                        alt={inputs[index].alt}
                                    />
                                )}
                                {contact}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
