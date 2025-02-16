import { useState } from "react";
import { inputs } from "../assets/inputs";
import Message from "../assets/message.svg";
export default function ContactChanger({ contacts, setContacts }) {
    const [focus, setFocus] = useState(false);
    return (
        <section>
            <div className="h2-section">
                <img className="h2-image" src={Message} alt="message image" />
                <h2>Contact</h2>
            </div>

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
                                placeholder={input.placeholder}
                                type="text"
                                maxLength={254}
                                value={contacts[index]}
                                autoFocus={input.id === focus}
                                onFocus={() => setFocus(input.id)}
                                onChange={(e) => {
                                    setContacts((prev) => {
                                        const changed = [...prev];
                                        changed[index] = e.target.value;
                                        console.log(changed);
                                        return changed;
                                    });
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
