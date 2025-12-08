import Account from "../../assets/account.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeText } from "../../features/aboutSlice";
import { FormEvent } from "react";
export default function AboutChanger({ Accordion }) {
    const aboutText = useAppSelector((state) => state.about.text);
    const dispatch = useAppDispatch();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        dispatch(changeText(String(form.get("aboutText"))));
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{ src: Account, alt: "person-image" }}
                    title="About"
                >
                    <textarea
                        placeholder="Write about yourself"
                        name="aboutText"
                        id="user-about-text"
                        maxLength={500}
                        rows={10}
                        cols={40}
                        defaultValue={aboutText}
                    ></textarea>
                    <button type="submit">Submit</button>
                </Accordion>
            </form>
        </section>
    );
}
