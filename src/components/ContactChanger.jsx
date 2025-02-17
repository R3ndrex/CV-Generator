import { inputs } from "../assets/inputs";
import Message from "../assets/message.svg";

// fix keys same for empty elements in contacts
// input default values only store contacts, which means that changes in inputs, after closing section will not save
export default function ContactChanger({
    ChangerHeader,
    contacts,
    setContacts,
}) {
    return (
        <section>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    let contacts = inputs.map((_, index) => form.get(index));
                    const uniqueContacts = contacts.filter(
                        (contact) => contact !== ""
                    );
                    const changedSet = new Set(uniqueContacts);
                    changedSet.size !== uniqueContacts.length
                        ? alert("You cant have same input values")
                        : setContacts(contacts);
                }}
            >
                <ChangerHeader>
                    <img
                        className="h2-image"
                        src={Message}
                        alt="message image"
                    />
                    <h2>Contact</h2>
                    <ul>
                        {inputs.map((input, index) => {
                            return (
                                <li key={input.id}>
                                    <img
                                        src={input.image}
                                        alt={input.alt}
                                        className="pictogram"
                                    />
                                    <input
                                        name={input.id}
                                        id={input.id}
                                        defaultValue={contacts[index] || ""}
                                        placeholder={input.placeholder}
                                        type="text"
                                        maxLength={100}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <button type="submit">Submit</button>
                </ChangerHeader>
            </form>
        </section>
    );
}
