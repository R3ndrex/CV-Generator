import { PayloadAction } from "@reduxjs/toolkit";

export function removeElementByID<T extends { id: string }>(
    state: T[],
    action: PayloadAction<string>
) {
    return state.filter((element) => element.id !== action.payload);
}
export function changeAllElements<T extends { id: string }>(
    state: T[],
    action: PayloadAction<T[]>
) {
    return action.payload;
}
