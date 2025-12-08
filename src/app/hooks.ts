import { AppDispatch, RootStore } from "./store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
