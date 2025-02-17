import iInCircle from "../assets/alpha-i-circle-outline.svg";
export default function ImageChanger({ ChangerHeader, setImage }) {
    function HandleImage(image) {
        if (image) {
            const reader = new FileReader();

            reader.onload = (e) => setImage(e.target.result);
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
                }}
            >
                <ChangerHeader>
                    <img className="h2-image" src={iInCircle} alt="alpha-i" />
                    <h2>General information</h2>
                </ChangerHeader>

                <input name="user-photo" type="file"></input>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}
