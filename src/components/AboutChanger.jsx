import Account from "../assets/account.svg";
export default function AboutChanger({ setAboutText }) {
    return (
        <section>
            <div className="h2-section">
                <img
                    className="h2-image"
                    src={Account}
                    alt="person image"
                ></img>
                <h2>About</h2>
            </div>
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
