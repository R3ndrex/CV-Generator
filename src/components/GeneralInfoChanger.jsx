import iInCircle from "../assets/alpha-i-circle-outline.svg";
export default function GeneralInfoChanger({ ChangerHeader, setGeneralInfo }) {
    function HandleImage(image) {
        if (image) {
            const reader = new FileReader();

            reader.onload = (e) =>
                setGeneralInfo((prev) => {
                    return { ...prev, photoSrc: e.target.result };
                });
            reader.readAsDataURL(image);
        }
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    HandleImage(form.get("user-photo"));
                    setGeneralInfo((prev) => {
                        return {
                            ...prev,
                            fullName: form.get("username"),
                            profession: form.get("profession"),
                        };
                    });
                }}
            >
                <ChangerHeader>
                    <img className="h2-image" src={iInCircle} alt="alpha-i" />
                    <h2>General information</h2>

                    <input
                        type="text"
                        name="username"
                        id="user-name"
                        placeholder="Enter your full name"
                    />
                    <input
                        type="text"
                        name="profession"
                        id="user-profession"
                        placeholder="Enter your profession"
                    />
                    <input
                        name="user-photo"
                        type="file"
                        accept="image/*"
                    ></input>

                    <button type="submit">Submit</button>
                </ChangerHeader>
            </form>
        </>
    );
}
