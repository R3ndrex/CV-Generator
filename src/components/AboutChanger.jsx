export default function AboutChanger({ setAboutText }) {
    return (
        <section>
            <h2>About</h2>
            <textarea
                name=""
                id=""
                onChange={(e) => setAboutText(e.target.value)}
                maxLength={400}
                rows={3}
                cols={30}
            ></textarea>
        </section>
    );
}
