import iInCircle from "../assets/alpha-i-circle-outline.svg";
export default function GeneralInfoChanger({ ChangerHeader, setGeneralInfo }) {
    function HandleImage(image) {
        if (image && image.name !== "") {
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
                <ChangerHeader
                    image={{ src: iInCircle, alt: "alpha-i" }}
                    title="General information"
                >
                    <input
                        type="text"
                        name="username"
                        id="user-name"
                        placeholder="Enter full name"
                    />
                    <input
                        type="text"
                        name="profession"
                        id="user-profession"
                        placeholder="Enter profession"
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
