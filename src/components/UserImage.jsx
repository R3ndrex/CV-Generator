import AccountCircle from "../assets/account-circle.svg";
export default function UserImage({ src }) {
    return (
        <img
            className="user-photo"
            src={!src ? AccountCircle : src}
            alt="user photo"
        />
    );
}
