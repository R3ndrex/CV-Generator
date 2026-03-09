import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Home from "../assets/home.svg";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";

interface contactType {
    text: string;
    image: string;
    alt: string;
    placeholder: string;
    pattern?: string;
    type: "email" | "text";
    id: string;
}
interface stateType {
    phone: contactType;
    email: contactType;
    address: contactType;
    linkedin: contactType;
    github: contactType;
}

const initialState: stateType = {
    phone: {
        text: "1234567891",
        image: Phone,
        alt: "Phone image",
        placeholder: "Enter phone number",
        type: "text",
        pattern: "^[0-9]*$",
        id: "0",
    },
    email: {
        text: "random@mail.com",
        image: Email,
        alt: "Email image",
        placeholder: "Enter email address",
        type: "email",
        id: "1",
    },
    address: {
        text: "Default home address",
        image: Home,
        type: "text",
        alt: "House image",
        placeholder: "Enter home address",
        id: "2",
    },
    linkedin: {
        text: "https://linkedin.com/in/default",
        image: LinkedIn,
        type: "text",
        alt: "LinkedIn image",
        placeholder: "Enter LinkedIn adress",
        id: "3",
    },
    github: {
        text: "",
        image: GitHub,
        type: "text",
        alt: "Github image",
        placeholder: "Enter GitHub adress",
        id: "4",
    },
};
export type FieldKey = keyof typeof initialState;

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        changeByArray: (state, action: PayloadAction<string[]>) => {
            state.github.text = action.payload[4];
            state.linkedin.text = action.payload[3];
            state.address.text = action.payload[2];
            state.email.text = action.payload[1];
            state.phone.text = action.payload[0];
        },
    },
});
export default contactSlice.reducer;
export const { changeByArray } = contactSlice.actions;
