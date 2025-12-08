import CvChanger from "./components/CVChanger/CvChanger";
import CV from "./components/CV/CV";
import "./App.css";
import { useState } from "react";

export default function App() {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <>
            <header>
                <h1>CV-Generator</h1>
                <button onClick={() => setShowEdit((prev) => !prev)}>
                    {showEdit ? "Close" : "Edit"}
                </button>
            </header>
            <CvChanger showEdit={showEdit} />
            <CV showEdit={showEdit} />
        </>
    );
}
