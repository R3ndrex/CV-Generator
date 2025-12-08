import { FormEvent } from "react";
import iInCircle from "../../assets/alpha-i-circle-outline.svg";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    changeImage,
    changeName,
    changeProfession,
} from "../../features/generalInfo";
export default function GeneralInfoChanger({ Accordion }) {
    const generalInfo = useAppSelector((state) => state.generalInfo);
    const dispatch = useAppDispatch();

    function HandleImage(image: File) {
        if (image && image.name !== "") {
            const reader = new FileReader();

            reader.onload = () => {
                dispatch(changeImage(reader.result as string));
            };
            reader.readAsDataURL(image);
        }
    }
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const image = formData.get("user-photo");
        if (image instanceof File) {
            HandleImage(image);
        }

        dispatch(changeName(String(formData.get("username"))));
        dispatch(changeProfession(String(formData.get("profession"))));
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{ src: iInCircle, alt: "alpha-i" }}
                    title="General information"
                >
                    <input
                        type="text"
                        name="username"
                        id="user-name"
                        placeholder="Enter full name"
                        maxLength={100}
                        defaultValue={generalInfo.fullName}
                    />
                    <input
                        type="text"
                        name="profession"
                        id="user-profession"
                        placeholder="Enter profession"
                        maxLength={50}
                        defaultValue={generalInfo.profession}
                    />
                    <input name="user-photo" type="file" accept="image/*" />

                    <button type="submit">Submit</button>
                </Accordion>
            </form>
        </section>
    );
}
