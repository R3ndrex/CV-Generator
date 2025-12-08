import { Fragment } from "react";
import { useAppSelector } from "../../app/hooks";
import { FieldKey } from "../../features/contactSlice";

export default function Contact() {
    const contacts = useAppSelector((state) => state.contact);
    const contactKeys = Object.keys(contacts);

    return (
        <>
            {(contactKeys as FieldKey[]).some(
                (key) => contacts[key].text.trim() !== ""
            ) && (
                <section>
                    <h2>Contact</h2>
                    <ul className="cv-aside-ul">
                        {(contactKeys as FieldKey[]).map((contact) => (
                            <Fragment key={contacts[contact].id}>
                                {contacts[contact].text && (
                                    <li>
                                        {contacts[contact].image && (
                                            <img
                                                className="pictogram"
                                                src={contacts[contact].image}
                                                alt={contacts[contact].alt}
                                            />
                                        )}
                                        {contacts[contact].text}
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
