export default function UserImage({ src }) {
    return (
        <>{src && <img className="user-photo" src={src} alt="user photo" />}</>
    );
}
