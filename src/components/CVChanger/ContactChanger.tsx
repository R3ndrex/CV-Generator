import Message from "../../assets/message.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeByArray } from "../../features/contactSlice";
import { FieldKey } from "../../features/contactSlice";
import { FormEvent } from "react";

export default function ContactChanger({ Accordion }) {
    const contacts = useAppSelector((state) => state.contact);
    const contactKeys = Object.keys(contacts);
    const dispatch = useAppDispatch();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let inputContacts = (contactKeys as FieldKey[]).map((contact) =>
            String(form.get(contacts[contact].id))
        );
        const uniqueContacts = inputContacts.filter(
            (contact) => contact !== ""
        );
        const changedSet = new Set(uniqueContacts);
        if (changedSet.size !== uniqueContacts.length) {
            return alert("You cant have same input values");
        }
        dispatch(changeByArray(inputContacts));
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{ src: Message, alt: "message-image" }}
                    title="Contact"
                >
                    <ul>
                        {(contactKeys as FieldKey[]).map((contact) => (
                            <li key={contacts[contact].id}>
                                <img
                                    src={contacts[contact].image}
                                    alt={contacts[contact].alt}
                                    className="pictogram"
                                />
                                <input
                                    name={contacts[contact].id}
                                    id={contacts[contact].id}
                                    defaultValue={contacts[contact].text}
                                    placeholder={contacts[contact].placeholder}
                                    type={contacts[contact].type}
                                    pattern={contacts[contact].pattern}
                                    maxLength={100}
                                />
                            </li>
                        ))}
                    </ul>
                    <button type="submit">Submit</button>
                </Accordion>
            </form>
        </section>
    );
}
