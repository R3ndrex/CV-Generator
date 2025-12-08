import { useAppSelector } from "../../app/hooks";
export default function UserIdentity() {
    const generalInfo = useAppSelector((state) => state.generalInfo);
    return (
        <>
            {(generalInfo.fullName !== "" || generalInfo.profession !== "") && (
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
            )}
        </>
    );
}
