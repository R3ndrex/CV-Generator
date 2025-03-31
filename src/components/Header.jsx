import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const { showEdit, setShowEdit } = useContext(UserContext);
    return (
        <header>
            <h1>CV-Generator</h1>
            <button onClick={() => setShowEdit((prev) => !prev)}>
                {showEdit ? "Close" : "Edit"}
            </button>
        </header>
    );
}
