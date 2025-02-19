import { useState } from "react";
import iInCircle from "../assets/alpha-i-circle-outline.svg";
export default function GeneralInfoChanger({
    ChangerHeader,
    generalInfo,
    setGeneralInfo,
}) {
    const [defaultGeneralInfo, setDefaultGeneralInfo] = useState(generalInfo);

    function HandleImage(image) {
        if (image && image.name !== "") {
            const reader = new FileReader();

            reader.onload = (e) =>
                setGeneralInfo((prev) => {
                    return { ...prev, photoSrc: e.target.result };
                });

            reader.readAsDataURL(image);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        HandleImage(formData.get("user-photo"));
        setGeneralInfo((prev) => {
            return {
                ...prev,
                fullName: formData.get("username"),
                profession: formData.get("profession"),
            };
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ChangerHeader
                    image={{ src: iInCircle, alt: "alpha-i" }}
                    title="General information"
                >
                    <input
                        type="text"
                        name="username"
                        id="user-name"
                        placeholder="Enter full name"
                        maxLength={100}
                        value={defaultGeneralInfo.fullName}
                        onChange={(e) =>
                            setDefaultGeneralInfo((prev) => {
                                return {
                                    ...prev,
                                    fullName: e.target.value,
                                };
                            })
                        }
                    />
                    <input
                        type="text"
                        name="profession"
                        id="user-profession"
                        placeholder="Enter profession"
                        maxLength={50}
                        value={defaultGeneralInfo.profession}
                        onChange={(e) =>
                            setDefaultGeneralInfo((prev) => {
                                return {
                                    ...prev,
                                    profession: e.target.value,
                                };
                            })
                        }
                    />
                    <input
                        name="user-photo"
                        type="file"
                        accept="image/*"
                    ></input>

                    <button type="submit">Submit</button>
                </ChangerHeader>
            </form>
        </>
    );
}
