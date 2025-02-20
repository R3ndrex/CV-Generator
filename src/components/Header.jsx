export default function Header({ showEdit, onEdit }) {
    return (
        <header>
            <h1>CV-Generator</h1>
            <button onClick={onEdit}>{showEdit ? "Close" : "Edit"}</button>
        </header>
    );
}
