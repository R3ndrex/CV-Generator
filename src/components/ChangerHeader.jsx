import Chevron from "../assets/chevron-down.svg";
import { useState } from "react";
export default function ChangerHeader({ image, title, children }) {
    const [active, setActive] = useState(false);
    return (
        <>
            <div
                className="h2-section"
                onClick={() => setActive((prev) => !prev)}
            >
                <img className="h2-image" src={image.src} alt={image.alt} />
                <h2>{title}</h2>
                <img
                    src={Chevron}
                    className={`h2-pictogram ${active && "rotated"}`}
                    alt="chevron-down"
                />
            </div>
            {active && <div className="changer-content">{children}</div>}
        </>
    );
}
