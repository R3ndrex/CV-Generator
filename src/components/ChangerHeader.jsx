import Chevron from "../assets/chevron-down.svg";
import { useState } from "react";
export default function ChangerHeader({ children }) {
    const [active, setActive] = useState(false);
    return (
        <>
            <div
                className="h2-section"
                onClick={() => setActive((prev) => !prev)}
            >
                {children[0]}
                {children[1]}
                <img
                    src={Chevron}
                    className={`h2-pictogram ${active && "rotated"}`}
                    alt="chevron-down"
                />
            </div>
            {active && children.slice(2)}
        </>
    );
}
