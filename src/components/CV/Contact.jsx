import { Fragment } from "react";
import { inputs } from "../../assets/inputs";

export default function Contact({ contacts }) {
    const CheckEmpty = (array) =>
        array.filter((element) => element !== "") <= 0;

    return (
        <>
            {!CheckEmpty(contacts) && (
                <section>
                    <h2>Contact</h2>
                    <ul className="cv-aside-ul">
                        {contacts.map((contact, index) => (
                            <Fragment key={inputs[index].id}>
                                {contact !== "" && (
                                    <li>
                                        {contact !== "" &&
                                            contact !== undefined && (
                                                <img
                                                    className="pictogram"
                                                    src={inputs[index].image}
                                                    alt={inputs[index].alt}
                                                />
                                            )}
                                        {contact}
                                    </li>
                                )}
                            </Fragment>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}
