import Cogs from "../assets/cogs.svg";
export default function ControlPanel({ LoadExample, className }) {
    return (
        <div className={`control-panel ${className}`}>
            <h2>
                <img src={Cogs} alt="cogs.svg" className="h2-image" />
                Control Panel
            </h2>
            <button onClick={LoadExample}>Load Example</button>

            <div className="color-container">
                <input
                    type="color"
                    name="user-color-changer"
                    id="color-changer"
                    onChange={(e) => changeColor(e.target.value)}
                />
                <label htmlFor="color-changer">Change color</label>
            </div>
        </div>
    );
}

function changeColor(color) {
    const r = document.querySelector(":root");
    r.style.setProperty("--changing-color", color);
}
