import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../store/store";
import {TypedUseSelectorHook} from "react-redux";


export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;