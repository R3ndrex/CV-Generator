import Contact from "./Contact.js";
import { useAppSelector } from "../../app/hooks.js";
export default function CvAside() {
    return (
        <aside className="cv-aside">
            <UserImage />
            <Contact />
        </aside>
    );
}
function UserImage() {
    const src = useAppSelector((state) => state.generalInfo.photoSrc);
    return (
        <>{src && <img className="user-photo" src={src} alt="user photo" />}</>
    );
}
