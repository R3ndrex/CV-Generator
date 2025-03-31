import Contact from "./Contact.jsx";
import UserImage from "./UserImage.jsx";

export default function CvAside({ contacts, imageSrc }) {
    return (
        <aside className="cv-aside">
            <UserImage src={imageSrc} />
            <Contact contacts={contacts} />
        </aside>
    );
}
