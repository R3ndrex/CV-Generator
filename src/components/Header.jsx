export default function Header({ onEdit }) {
    return (
        <header>
            <h1>CV-Generator</h1>
            <button onClick={onEdit}>Edit</button>
        </header>
    );
}
