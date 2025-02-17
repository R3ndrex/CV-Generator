import Chevron from "../assets/chevron-down.svg";
export default function ChangerHeader({ children }) {
    return (
        <div className="h2-section">
            {children}
            <img src={Chevron} className="h2-pictogram" alt="chevron-down" />
        </div>
    );
}
