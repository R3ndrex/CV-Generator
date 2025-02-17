import Account from "../assets/account.svg";
export default function AboutChanger({ ChangerHeader, setAboutText }) {
    return (
        <section>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    setAboutText(form.get("aboutText"));
                }}
            >
                <ChangerHeader>
                    <img
                        className="h2-image"
                        src={Account}
                        alt="person image"
                    ></img>
                    <h2>About</h2>
                </ChangerHeader>
                <textarea
                    name="aboutText"
                    id="user-about-text"
                    maxLength={400}
                    rows={3}
                    cols={30}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
