import { useAppSelector } from "../../app/hooks";
export default function About() {
    const aboutText = useAppSelector((state) => state.about.text);
    return (
        <>
            {aboutText && aboutText.trim() !== "" && (
                <section>
                    <h2>About</h2>
                    <p>{aboutText}</p>
                </section>
            )}
        </>
    );
}
