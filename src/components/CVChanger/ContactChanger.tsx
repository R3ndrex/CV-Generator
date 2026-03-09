import Message from "../../assets/message.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeByObject } from "../../features/contactSlice.ts";
import type { FieldKey, stateType } from "../../features/contactSlice.ts";
import { FormEvent } from "react";
import Accordion from "./Accordion.tsx";

export default function ContactChanger() {
    const contacts = useAppSelector((state) => state.contact);
    const contactKeys = Object.keys(contacts);
    const dispatch = useAppDispatch();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const raw = Object.fromEntries(form.entries());
        const data: stateType<string> = {
            phone: String(raw.phone) ?? "",
            email: String(raw.email) ?? "",
            linkedin: String(raw.linkedin) ?? "",
            address: String(raw.address) ?? "",
            github: String(raw.github) ?? "",
        };
        const uniqueContacts = Object.values(data).filter(
            (contact) => contact !== "",
        );
        console.log(uniqueContacts);
        const changedSet = new Set(uniqueContacts);
        if (changedSet.size !== uniqueContacts.length) {
            return alert("You cant have same input values");
        }
        dispatch(changeByObject(data));
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{ src: Message, alt: "message-image" }}
                    title="Contact"
                >
                    <ul>
                        {(contactKeys as FieldKey[]).map((contact, i) => (
                            <li key={contacts[contact].id}>
                                <img
                                    src={contacts[contact].image}
                                    alt={contacts[contact].alt}
                                    className="pictogram"
                                />
                                <input
                                    name={contactKeys[i]}
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
