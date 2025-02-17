import { inputs } from "../assets/inputs";
import Message from "../assets/message.svg";

// fix keys same for empty elements in contacts

export default function ContactChanger({ ChangerHeader, setContacts }) {
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
                        ? alert("Ti 4e")
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
                        {inputs.map((input) => {
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
                                        placeholder={input.placeholder}
                                        type="text"
                                        maxLength={254}
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
