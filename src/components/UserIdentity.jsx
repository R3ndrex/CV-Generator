export default function UserIdentity({ generalInfo }) {
    return (
        <div>
            {generalInfo.fullName && (
                <h2 className="margin-bottom-0">{generalInfo.fullName}</h2>
            )}
            {generalInfo.profession && <h3>{generalInfo.profession}</h3>}
        </div>
    );
}
