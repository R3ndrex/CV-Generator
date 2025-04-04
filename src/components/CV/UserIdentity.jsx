export default function UserIdentity({ generalInfo }) {
    return (
        <>
            {generalInfo.fullName !== "" ||
                (generalInfo.profession !== "" && (
                    <section>
                        {generalInfo.fullName && (
                            <h2 className="margin-bottom-0">
                                {generalInfo.fullName}
                            </h2>
                        )}
                        {generalInfo.profession && (
                            <h3>{generalInfo.profession}</h3>
                        )}
                    </section>
                ))}
        </>
    );
}
